import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Avatar from "../../_components/Avatar"
import Container from "../../_components/Container"
import { RootStackParamList } from "../../_routes/RootStackPrams"
import styles from "./styles"
import * as ImagePicker from 'expo-image-picker'

const EditProfile = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Profile'>
    const navigation = useNavigation<navigationTypes>()
    const profile = navigation.getState().routes.find(route => route.name == "EditProfile")?.params

    const [name, setName] = useState<string>('')
    const [hasName, setHasName] = useState<boolean>(true)
    const [image, setImage] = useState<any>()

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!result.cancelled) {
            setImage(result)
        }
    }

    return (
        <Container
            headerProps={{
                editProfileHeader: {
                    submit: () => { }
                }
            }}
            footerProps={{ currentTab: 'Profile' }}
        >
            <View>
                {profile &&
                    <View style={styles.containerImage}>
                        <Avatar user={profile} withBorder={true} />
                        <TouchableOpacity onPress={() => pickImage()}>
                            <Text style={styles.textUpdateImage}>Alterar foto do perfil</Text>
                        </TouchableOpacity>
                        <View>
                            <View style={styles.containerEditName}>
                                <View style={styles.containerRowEditName}>
                                    <Text style={styles.textName}>Nome</Text>
                                    {!hasName ? (
                                        <Text style={styles.textNameUser}>{profile.name}</Text>
                                    ) : (
                                        <TextInput
                                            placeholder='Digite um nome'
                                            style={styles.input}
                                            value={name}
                                            onChangeText={(n) => setName(n)}
                                            autoCapitalize={'none'}
                                        />
                                    )}

                                    <TouchableOpacity style={styles.buttomDelete} onPress={() => setHasName(!hasName)}>
                                        <Image source={require('../../_assets/images/limpar.png')} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                }
            </View>
        </Container>
    )
}

export default EditProfile