import { useColorScheme } from '@/hooks/use-color-scheme';
import StartGameScreen from '@/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export const unstable_settings = {
  anchor: '(tabs)',
}
export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <StartGameScreen />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }

});

