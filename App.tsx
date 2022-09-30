import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Nunito_400Regular, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';
import { Loading } from './src/components';
import { Routes } from './src/routes';
import theme from './src/theme';

export default function App() {
  const [fontsLoading] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent barStyle="dark-content" />
      {!fontsLoading ? <Loading /> : <Routes />}
    </ThemeProvider>
  );
}
