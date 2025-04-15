import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { StatusBar } from 'expo-status-bar';

import config from '../tamagui.config';

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Regular: require('../assets/fonts/Manrope-Regular.ttf'),
    Medium: require('../assets/fonts/Manrope-Medium.ttf'),
    Bold: require('../assets/fonts/Manrope-Bold.ttf'),
    Light: require('../assets/fonts/Manrope-Light.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Slot />
      <StatusBar hidden />
    </TamaguiProvider>
  );
}
