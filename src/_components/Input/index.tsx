import { Image, TextInput, View } from "react-native"
import styles from "./styles"
import { IInput } from "./types"

const Input = (props: IInput) => {
    return (
        <View style={styles.containerInput}>
            <View style={styles.row}>
                {props.icone &&
                    <Image source={props.icone} />
                }
                <TextInput
                    placeholder={props.placeholder}
                    style={[styles.input, props.style]}
                    secureTextEntry={props.secureTextEntry}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    autoCapitalize="none"
                />
            </View>
        </View>
    )
}

export default Input