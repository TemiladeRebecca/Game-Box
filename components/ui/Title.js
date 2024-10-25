import { Text, StyleSheet } from 'react-native';
import Color from '../../constants/Color';

export default function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}


const styles = StyleSheet.create({
    title: {
        margin: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Color.primaryaccent500,
        borderWidth: 2,
        borderColor: Color.primaryaccent500,
        padding: 8
    }
})