import { StyleSheet, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartingScreen from './screens/StartingScreen';

export default function App() {
  return (
    <LinearGradient 
      colors={['#ddb52f', '#72063c', '#4e0329']}
      start={{x:0, y:0}}
      end={{x:1, y:1}}
      style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}>
        <StartingScreen />
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
  }
});
