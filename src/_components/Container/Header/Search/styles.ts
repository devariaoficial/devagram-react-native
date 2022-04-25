import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../../../app.json'
const { height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
       zIndex: 9,
       position: 'absolute',
       top: 90,
       backgroundColor: colors.whiteColor,
       alignItems: "center",
       justifyContent: "center"
    },
    backgroundOdd: {
        width: width,
        height: 50,
        backgroundColor: colors.whiteColor
    },
    backgroundPair: {
        width: width,
        height: 50,
        backgroundColor: colors.grayColor00
    },
    imageUser: {
        width: 32,
        height: 32,
        borderRadius: 10
    },
    name: {
        marginLeft: 8,
        fontSize: 12,
        fontFamily: 'biennale-bold',
        lineHeight: 12
    },
    email: {
        marginLeft: 8,
        fontSize: 12,
        fontFamily: 'biennale',
        lineHeight: 12
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 12,
        marginVertical: 10
    }
});

export default styles