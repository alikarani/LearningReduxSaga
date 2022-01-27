import { StyleSheet } from 'react-native';
import { width, height } from '../../HelperFunctions';

const styles = StyleSheet.create({
    outerContainer: {
        height: height * 100,
        justifyContent: 'center'
    },
    text: {
        fontSize: width * 4,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    innerCounter: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterText: {
        fontFamily: 'System',
        fontSize: width * 7,
        fontWeight: '400',
        color: '#000',
    },
    buttonText: {
        fontFamily: 'System',
        fontSize: width * 10,
        fontWeight: '300',
        color: 'red',
        marginLeft: width * 4.5,
        marginRight: width * 4.5,
    }
});

export default styles;