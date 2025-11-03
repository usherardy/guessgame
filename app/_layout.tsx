import StartGameScreen from '@/screens/StartGameScreen';
import { View } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
}
export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <View>
      <StartGameScreen />
    </View>
  );
}

