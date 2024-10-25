import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/ui/Title.js';
import NumberContainer from '../components/GuessedNumberContainer.js';

export default function GameScreen({userNumber}) {

    const generateRandomNumber = (min, max, exclude)  => {
        const randomNumber = Math.floor(Math.random() * (max -min)) + min;
        if(randomNumber === exclude) {
            return generateRandomNumber(min, max, exclude);
        } else {
            return randomNumber;
        }
    };

    const initialState = generateRandomNumber(1, 100, userNumber);
    const [guessedNumber] = useState(initialState)
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{guessedNumber}</NumberContainer>
        </View>
        
    )
}

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 50
    },
    
})