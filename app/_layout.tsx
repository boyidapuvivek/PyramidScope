import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { StatusBar } from 'expo-status-bar';

import config from '../tamagui.config';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Regular: require('../assets/fonts/Manrope-Regular.ttf'),
    Medium: require('../assets/fonts/Manrope-Medium.ttf'),
    Bold: require('../assets/fonts/Manrope-Bold.ttf'),
    Light: require('../assets/fonts/Manrope-Light.ttf'),
    SemiBold: require('../assets/fonts/Manrope-SemiBold.ttf'),
    NunitoSans: require('../assets/fonts/NunitoSans-VariableFont.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom', 'left', 'right']}>
          <Slot />
          <StatusBar translucent />
        </SafeAreaView>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
