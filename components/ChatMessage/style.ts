import { StyleSheet } from 'react-native';
import  Colors  from '../../constants/Colors';


const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    messageBox: {
        borderRadius: 5,
        padding: 5
    },
    name: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    message: {
        fontWeight: '400'
    },
    time: {
        alignSelf: "flex-end",
        color: 'gray'
    }
})
export default styles;