import { Image, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../_components/Button';
import Input from '../../_components/Input';
import { useCallback, useEffect, useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../_routes/RootStackPrams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as UserService from '../../_services/UserService';
import communStyles from '../../communStyles'

const Login = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
  const navigation = useNavigation<navigationTypes>()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [erro, setErro] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    verifyLogged()
  },[])

  const onLogin = async () => {
    try{
      setLoading(true)
      await UserService.login({login: email, senha: password})
      setLoading(false)
      navigation.navigate('Home')
    }catch(error : any){
      console.log(error)
      setErro('Erro ao efetuar o login, tente novamente')
      setLoading(false)
    }
  }

  const verifyLogged = useCallback(async () => {
    const user = await UserService.getCurrentUser()
    if(user?.token){
      navigation.navigate('Home')
    }
  },[])

  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../../_assets/images/Logo.png')} />

      {erro != '' && <Text style={communStyles.textError}>{erro}</Text>}

      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"Digite o seu email"}
        icone={require('../../_assets/images/envelope.png')}
        value={email} />

      <Input
        onChangeText={(e: string) => setPassword(e)}
        placeholder={"Digite a sua senha"}
        secureTextEntry={true}
        icone={require('../../_assets/images/key.png')}
        value={password} />

      <Button onPress={() => onLogin()} placeholder="Login" loading={loading} disabled={!email || !password} />

      <View style={styles.containerWithAccount}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login