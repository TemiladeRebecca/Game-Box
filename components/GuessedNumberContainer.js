import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/Color';

export default function NumberContainer({children}) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textContainer}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 2,
        borderColor: Color.primaryaccent500,
        padding: 20,
        margin: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})