import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { RootStackParamList } from "../../_routes/RootStackPrams"
import { IUser, IUserData } from "../../_services/UserService/types"
import styles from "./styles"

const Avatar = (props: { user: IUserData | IUser }) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>
    const navigation = useNavigation<navigationTypes>()

    return (
        <TouchableOpacity onPress={() => { navigation.navigate('Profile', props.user)}}>
            <Image
                style={styles.imageUser}
                source={props.user.avatar ?
                    { uri: props.user.avatar }
                    : require('../../_assets/images/user.png')} />
        </TouchableOpacity>
    )
}

export default Avatar