import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title.js';
import NumberContainer from '../components/GuessedNumberContainer.js';
import PrimaryButton from '../components/ui/PrimaryButton.js';
import Color from '../constants/Color.js';
 
export default function GameScreen({userNumber, onGameOver, onRestart}) {

    let minBoundary = useRef(1);     // initializing with useRef to persist across renders
    let maxBoundary = useRef(100);   // initializing with useRef to persist across renders

    const generateRandomNumber = (min, max, exclude)  => {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        if(randomNumber === exclude) {
            return generateRandomNumber(min, max, exclude);
        } else {
            return randomNumber;
        }
    };

    const initialState = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialState);

    useEffect(() => {
        if (!currentGuess && onRestart) {
            minBoundary.current = 1;
            maxBoundary.current = 100;
        }

        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver, onRestart])

    const newGuessHandler = (direction) => {
        if (direction === 'lower' && currentGuess < userNumber) {
            Alert.alert("Oops", "The guess is too low! Try a higher number.", [
                { text: "Okay", style: "cancel" }
            ]);
            return;
        } else if (direction === 'greater' && currentGuess > userNumber) {
            Alert.alert("Oops", "The guess is too high! Try a lower number.", [
                { text: "Okay", style: "cancel" }
            ]);
            return;
        }
        
         
        if (direction === 'lower') {
            maxBoundary.current = currentGuess;    // updating the useRef current object property
        } else {
            minBoundary.current = currentGuess + 1;   // updating the useRef current object property
        }
        const newRandomNumber = generateRandomNumber(
            minBoundary.current,
            maxBoundary.current, 
            currentGuess);
        setCurrentGuess(newRandomNumber);
    }

    
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={styles.textContainer}>Higher or Lower?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={newGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={newGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
        
    )
}

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 50
    },
    textContainer: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.primaryaccent500
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginHorizontal: 30
   } ,
    buttonContainer: {
        flex: 1,
   }
})