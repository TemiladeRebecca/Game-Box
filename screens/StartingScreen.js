import { useState } from 'react'
import {View, TextInput, StyleSheet, Alert} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import CustomAlert from '../components/CustomAlert';

export default function StartingScreen() {
    const [enteredNumber, setEnteredNumber] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

    const closeAlert = () => {
        setModalVisible(false);
        setEnteredNumber('');
    }

    const textInputHandler = (text) => {
        setEnteredNumber(text);
    };

    const resetInputHandler = () => {
        setEnteredNumber('');
        setModalVisible(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            setModalVisible(true)
            // Alert.alert('Invalid Number',
            //     'Enter number between 1 and 99',
            //     [{text: 'ok', style: 'destructive', onPress:resetInputHandler}],
                
            // );
            return;
        }
    }


    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInputContainer} 
                maxLength={2} 
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={textInputHandler}
                value={enteredNumber} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}> 
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>                
                </View> 
                <CustomAlert 
                    isModalVisible={modalVisible}
                    closeAlert={closeAlert} />       
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30%',
        marginHorizontal: 30,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25
    },
    textInputContainer: {
        width: 70,
        textAlign: 'center',
        padding: 4,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFD700',
        borderBottomWidth: 3,
        borderBottomColor: '#FFD700',
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})