import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "../../_routes/RootStackPrams"
import { IUser, IUserData } from "../../_services/UserService/types"
import Avatar from "../Avatar"
import styles from "./styles"
import * as UserService from '../../_services/UserService';
import { useState } from "react"

const UserInfo = (props: {profile: IUserData, userLogged: IUser}) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Profile'>
    const navigation = useNavigation<navigationTypes>()
    const [followers, setFollowers] = useState<number>(props.profile.followers)
    const [followThisUser, setFollowThisUser] = useState<boolean>(props.profile.followThisUser)
    const toggleFollow = async () => {
        try{
            if(followThisUser){
                setFollowers(followers - 1)
            }else{
                setFollowers(followers + 1)
            }
            await UserService.toggleFollow(props.profile.id)
            setFollowThisUser(!followThisUser)
        }catch(err: any){
            Alert.alert("Erro", "Erro ao efetuar a operacao")
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
            <Avatar withBorder={true} user={props.profile} />
            <View>
                <View style={styles.containerInfoProfile}>
                    <View style={styles.containerInfo}>
                        <Text style={styles.textNumber}>{props.profile.posts}</Text>
                        <Text style={styles.placeholder}>Publicacoes</Text>
                    </View>
                    <View style={[styles.containerInfo, {marginHorizontal: 10}]}>
                        <Text style={styles.textNumber}>{followers}</Text>
                        <Text style={styles.placeholder}>Seguidores</Text>
                    </View>
                    <View style={styles.containerInfo}>
                        <Text style={styles.textNumber}>{props.profile.following}</Text>
                        <Text style={styles.placeholder}>Seguindo</Text>
                    </View>
                </View>
                <View style={[styles.containerInfo, {marginTop: 16}]}>
                    {props.profile.id == props.userLogged.id ?
                    <TouchableOpacity style={styles.outlineButton} onPress={() => navigation.navigate('EditProfile', props.profile)} >
                        <Text style={styles.textButtonOutline}>Editar Usuario</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => toggleFollow()} style={followThisUser ? styles.outlineButton : styles.button}>
                        <Text style={followThisUser ? styles.textButtonOutline : styles.textButton}>{followThisUser?'Deixar de seguir':'Seguir'}</Text>
                    </TouchableOpacity>
                }
                    
                </View>
            </View>
        </View>
    )
}

export default UserInfo