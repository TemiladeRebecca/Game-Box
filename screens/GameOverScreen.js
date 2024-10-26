import {View, Text, StyleSheet} from 'react-native';
import Color from '../constants/Color';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({onRestart}) {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.textContainer}>Game Over</Text>
            </View> 
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <PrimaryButton onPress={onRestart}>Start Game</PrimaryButton>
                </View>   
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        opacity: 0.9,
        letterSpacing: 2,
        textShadowColor: Color.primaryaccent500,
        textShadowOffset: { width: 2, height: 2 },
        transform: [{ scale: 1.1 }],
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 30
       } ,
       button: {
        flex: 1,
       }
})