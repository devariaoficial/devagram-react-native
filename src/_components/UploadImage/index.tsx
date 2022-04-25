import { Image, TouchableOpacity, View } from "react-native"
import * as ImagePicker from 'expo-image-picker'
import styles from "./styles"

const UploadImage = (props: {
    setImage: (image: ImagePicker.ImagePickerResult) => void,
    image: any
}) => {

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!result.cancelled) {
            props.setImage(result)
        }
    }

    return (
        <View>
            <TouchableOpacity style={styles.containerAvatar} onPress={pickImage}>
                {props.image ?
                    <Image style={styles.image} source={{uri: props.image.uri}}></Image>
                    :
                    <Image source={require('../../_assets/images/Avatar_Foto.png')}></Image>
                }
            </TouchableOpacity>
        </View>
    )
}

export default UploadImage