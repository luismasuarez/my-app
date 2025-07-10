import { AuthProvider, useAuth } from '@/core/contexts/AuthContext';
import useCustomTheme from '@/core/hooks/useCustomTheme';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

function RootLayoutNav() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null; // Mostrar splash screen mientras carga
  }

  return (
    <Stack>
      {user ? (
        // Usuario autenticado - mostrar app principal
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      ) : (
        // Usuario no autenticado - mostrar flujo de auth
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default function RootLayout() {
  const { theme, fontsLoaded } = useCustomTheme()

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
