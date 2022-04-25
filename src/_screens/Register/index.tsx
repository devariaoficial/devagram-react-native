import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../_components/Button';
import Input from '../../_components/Input';
import { useEffect, useState } from 'react';
import UploadImage from '../../_components/UploadImage';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../_routes/RootStackPrams';
import communStyles from '../../communStyles'
import { validateName, validateEmail, validatePassword, validateConfirmPassword } from '../../_utils/validations'
import * as UserService from '../../_services/UserService';

const Register = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Register'>
    const navigation = useNavigation<navigationTypes>()
    const [erro, setErro] = useState<string>('')
    const [image, setImage] = useState<any>(null)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    
    const onRegister = async () => {
        try {
            setLoading(true)
            const body = new FormData()
            body.append("nome", name)
            body.append("email", email)
            body.append("senha", password)
            if (image) {
                const file: any = {
                    uri: image.uri,
                    type: `image/${image.uri.split('/').pop().split('.').pop()}`,
                    name: image.uri.split('/').pop()
                }
                body.append("file", file)
            }
            await UserService.register(body)
            await UserService.login({login: email, senha: password})
            setLoading(false)
            navigation.navigate('Home')
        } catch (error: any) {
            console.log(error)
            setErro('Erro ao efetuar o cadastro, tente novamente')
            setLoading(false)
        }
    }

    const formIsValid = () => {
        const nameIsValid = validateName(name)
        const emailIsValid = validateEmail(email)
        const passwordIsValid = validatePassword(password)
        const confirmPasswordIsValid = validateConfirmPassword(password, confirmPassword)
        setErro('')
        if (!nameIsValid && name != '') {
            setErro('Nome invalido')
        }
        else if (!emailIsValid && email != '') {
            setErro('Email invalido')
        } else if (!passwordIsValid && password != '') {
            setErro('Senha invalida')
        } else if (!confirmPasswordIsValid && confirmPassword != '') {
            setErro('Confirmacao de senha nao confere')
        } else {
            setErro('')
        }
    }

    useEffect(() => {
        formIsValid()
    }, [name, email, password, confirmPassword])

    return (
        <View style={styles.container}>

            <UploadImage setImage={setImage} image={image} />

            {erro != '' && <Text style={communStyles.textError}>{erro}</Text>}
            <Input
                onChangeText={(e: string) => setName(e)}
                placeholder={"Nome completo"}
                icone={require('../../_assets/images/user.png')}
                value={name} />

            <Input
                onChangeText={(e: string) => setEmail(e)}
                placeholder={"E-mail"}
                icone={require('../../_assets/images/envelope.png')}
                value={email} />

            <Input
                onChangeText={(e: string) => setPassword(e)}
                placeholder={"Senha"}
                secureTextEntry={true}
                icone={require('../../_assets/images/key.png')}
                value={password} />

            <Input
                onChangeText={(e: string) => setConfirmPassword(e)}
                placeholder={"Confirmar Senha"}
                secureTextEntry={true}
                icone={require('../../_assets/images/key.png')}
                value={confirmPassword} />

            <Button onPress={() => onRegister()} placeholder="Cadastrar" loading={loading} disabled={erro != '' || name == '' || email == '' || password == '' || confirmPassword == ''} />

            <View style={styles.containerWithOutAccount}>
                <Text>Já possui uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textSignIn}>Faça seu login agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register