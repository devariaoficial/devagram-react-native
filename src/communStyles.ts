import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../app.json'
const {height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    textError: {
        fontFamily: 'biennale',
        fontSize: 14,
        fontWeight: '400',
        color: colors.primaryColor,
        lineHeight: 21,
        marginBottom: height * 0.02
    }
})

export default styles