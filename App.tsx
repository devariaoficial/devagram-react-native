import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/_routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'biennale-bold': require('./assets/fonts/Biennale-Bold.otf'),
    'biennale': require('./assets/fonts/Biennale-Regular.otf')
  });

  return (
    fontsLoaded ?
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      :
      <AppLoading />
  );
}
