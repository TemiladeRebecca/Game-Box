import { View, Text, Pressable, StyleSheet } from 'react-native';
import Color from '../../constants/Color';

export default function PrimaryButton({children, onPress}) {
    return (
            <View style={styles.buttonOuterContainer}>
                <Pressable
                    onPress={onPress}
                    style={({pressed}) => pressed ?  [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
                    android_ripple={{color: Color.primary500}}>
                    <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>    
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 10,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Color.primary600,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 14,
        elevation: 4
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})