import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { IHeader } from "./types"
import { colors } from '../../../../app.json'
import { RootStackParamList } from "../../../_routes/RootStackPrams"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Header = (props: IHeader) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>
    const navigation = useNavigation<navigationTypes>()

    const logout = async () => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            {
                props.default && (
                    <View style={styles.row}>
                        <View>
                            <Image source={require('../../../_assets/images/logoHorizontal.png')} style={styles.icon} />
                        </View>

                        <View style={props?.searchBar?.value.length == 0 ? styles.containerInputSearch : [styles.containerInputSearch, { borderColor: colors.primaryColor, borderWidth: 1 }]}>
                            <Image
                                source={require('../../../_assets/images/search.png')}
                                style={styles.icon}
                            />

                            <TextInput
                                placeholder='Pesquisar'
                                style={props?.searchBar?.value.length == 0 ? styles.input : styles.inputActive}
                                value={props?.searchBar?.value}
                                onChangeText={props?.searchBar?.onChange}
                                autoCapitalize={'none'}
                            />
                        </View>

                    </View>
                )
            }

            {
                props.profileHeader &&
                <View style={styles.containerProfile}>
                    <View style={{ marginHorizontal: 16 }}>
                        {props.profileHeader.isExternalProfile &&
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image style={{ alignItems: "flex-start" }} source={require('../../../_assets/images/voltar.png')} />
                            </TouchableOpacity>
                        }
                    </View>
                    <Text style={styles.textName}>{props.profileHeader.userName}</Text>
                    <View style={{ marginHorizontal: 16 }}>
                        {!props.profileHeader.isExternalProfile &&
                            <TouchableOpacity onPress={() => logout()}>
                                <Image source={require('../../../_assets/images/log-out.png')} />
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            }

            {
                props.editProfileHeader &&
                <View style={styles.containerProfile}>
                    <View style={{ marginHorizontal: 16 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.textCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textName}>Editar Perfil</Text>
                    <View style={{ marginHorizontal: 16 }}>
                        <TouchableOpacity onPress={() => props.editProfileHeader?.submit()}>
                            <Text style={styles.textSubmit}>Concluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

export default Header