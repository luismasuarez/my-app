import { AuthProvider, useAuth } from '@/core/contexts/AuthContext';
import useCustomTheme from '@/core/hooks/useCustomTheme';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

function RootLayoutNav() {
  const { user, isLoading } = useAuth();
  console.log("User", user)

  if (isLoading) {
    return null; // Mostrar splash screen mientras carga
  }

  return (
    <Stack>
      {user ? (
        // Usuario autenticado - mostrar app principal
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        // Usuario no autenticado - mostrar flujo de auth
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default function RootLayout() {
  const { theme } = useCustomTheme()

  const [fontsLoaded] = useFonts({
    "RobotoSlab-Small": require('../assets/fonts/RobotoSlab-Regular.ttf'),
    "RobotoSlab-Medium": require('../assets/fonts/RobotoSlab-Medium.ttf'),
    "RobotoSlab-Large": require('../assets/fonts/RobotoSlab-Bold.ttf'),
  });

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
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
