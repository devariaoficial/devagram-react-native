import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../app.json'
const { height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    imageUser: {
        backgroundColor: colors.whiteColor,
        width: 32,
        height: 32,
        borderRadius: 100,
    },
    imageUserWithBorder: {
        width: 88,
        height: 88,
        borderRadius: 100,
    },
    borderImage: {
        width: 95,
        height: 95,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles