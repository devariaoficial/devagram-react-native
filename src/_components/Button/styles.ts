import { Dimensions, StyleSheet } from "react-native";
import {colors} from "../../../app.json"
const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    containerButton: {
        marginTop: height/20
    }, 
    button: {
        width: width/1.3,
        height: height/15,
        backgroundColor: colors.primaryColor,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: colors.whiteColor,
        fontFamily: 'biennale',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16
    },
    buttonDisabled: {
        backgroundColor: colors.grayColor03
    }
})

export default styles