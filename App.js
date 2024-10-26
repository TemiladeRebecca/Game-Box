import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartingScreen from './screens/StartingScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Color from './constants/Color';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  

  const userNumberHandler = (enteredNumber) => {
    setUserNumber(enteredNumber);
  }

  const gameOverHandler = () => {
    setIsGameOver(true);
  }

  const restartGameHandler = () => {
    setUserNumber(null);
    setIsGameOver(false);
  }

  let screen = <StartingScreen pickedNumber={userNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler} onRestart={restartGameHandler}/>
  }

  if (isGameOver) {
    screen = <GameOverScreen onRestart={restartGameHandler} />
  }
  
  return (
    <LinearGradient 
      colors={[Color.primaryaccent500, Color.primary500, Color.primary600]}
      start={{x:0, y:0}}
      end={{x:1, y:1}}
      style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}>
          
        {screen}
      </ImageBackground>  
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.3
  },
});
