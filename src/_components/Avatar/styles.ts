import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../app.json'
const { height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    imageUser: {
        width: 32,
        height: 32,
        borderRadius: 100,
    },
});

export default styles