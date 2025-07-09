import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "RobotoSlab-Small": require('../assets/fonts/RobotoSlab-Regular'),
    "RobotoSlab-Medium": require('../assets/fonts/RobotoSlab-Medium'),
    "RobotoSlab-Large": require('../assets/fonts/RobotoSlab-Bold'),
  });

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
    fonts: {
      ...DefaultTheme.fonts,
      displayLarge: { ...DefaultTheme.fonts.displayLarge, fontFamily: 'RobotoSlab-Large' },
      displayMedium: { ...DefaultTheme.fonts.displayMedium, fontFamily: 'RobotoSlab-Medium' },
      displaySmall: { ...DefaultTheme.fonts.displaySmall, fontFamily: 'RobotoSlab-Small' },
      headlineLarge: { ...DefaultTheme.fonts.headlineLarge, fontFamily: 'RobotoSlab-Large' },
      headlineMedium: { ...DefaultTheme.fonts.headlineMedium, fontFamily: 'RobotoSlab-Medium' },
      headlineSmall: { ...DefaultTheme.fonts.headlineSmall, fontFamily: 'RobotoSlab-Small' },
      titleLarge: { ...DefaultTheme.fonts.titleLarge, fontFamily: 'RobotoSlab-Large' },
      titleMedium: { ...DefaultTheme.fonts.titleMedium, fontFamily: 'RobotoSlab-Medium' },
      titleSmall: { ...DefaultTheme.fonts.titleSmall, fontFamily: 'RobotoSlab-Small' },
      bodyLarge: { ...DefaultTheme.fonts.bodyLarge, fontFamily: 'RobotoSlab-Large' },
      bodyMedium: { ...DefaultTheme.fonts.bodyMedium, fontFamily: 'RobotoSlab-Medium' },
      bodySmall: { ...DefaultTheme.fonts.bodySmall, fontFamily: 'RobotoSlab-Small' },
      labelLarge: { ...DefaultTheme.fonts.labelLarge, fontFamily: 'RobotoSlab-Large' },
      labelMedium: { ...DefaultTheme.fonts.labelMedium, fontFamily: 'RobotoSlab-Medium' },
      labelSmall: { ...DefaultTheme.fonts.labelSmall, fontFamily: 'RobotoSlab-Small' },
    },
  };

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
