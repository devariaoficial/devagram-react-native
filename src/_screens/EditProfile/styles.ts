import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../app.json'
const { height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    containerEditName: {
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#DADADA',
    },
    containerRowEditName: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16
    },
    buttomDelete: {
        flex: 1, 
        alignItems: 'flex-end'
    },
    textName: {
        fontFamily: 'biennale',
        fontSize: 14,
        fontWeight: '400',
        color: colors.grayColor03,
        marginRight: 16
    },
    input: {
        fontFamily: 'biennale',
        fontWeight: '500',
        color: colors.grayColor04,
        width: width/1.5,
        height: height/50,
    },
    textNameUser: {
        fontFamily: 'biennale',
        fontWeight: '600',
        color: colors.grayColor04,
    },
    containerImage: {
        alignItems: "center",
        marginTop: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.grayColor01
    },
    textUpdateImage: {
        fontSize: 13,
        color: colors.primaryColor,
        fontFamily: 'biennale',
        fontWeight: '500',
        textDecorationLine: "underline",
        marginBottom: 16,
        marginTop: 16  
     }
});

export default styles