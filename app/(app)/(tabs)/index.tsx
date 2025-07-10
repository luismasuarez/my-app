import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/core/components/HelloWave';
import ParallaxScrollView from '@/core/components/ParallaxScrollView';
import ThemedView from '@/core/components/ThemedView';
import { useAuth } from '@/core/contexts/AuthContext';
import { Button, Text } from 'react-native-paper';

export default function HomeScreen() {
  const { signOut } = useAuth()
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <Text variant='headlineMedium'>Welcome!</Text>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer} contained>
        <Text variant='bodyLarge'>Step 1: Try it</Text>
        <Text variant='bodySmall'>
          Edit <Text variant='bodyMedium'>app/(tabs)/index.tsx</Text> to see changes.
          Press{' '}
          <Text variant='bodyMedium'>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </ThemedView>
      <ThemedView style={styles.stepContainer} contained>
        <Text variant='bodyLarge'>Step 2: Explore</Text>
        <Text variant='bodySmall'>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </Text>
      </ThemedView>
      <ThemedView style={styles.stepContainer} contained>
        <Text variant='bodyLarge'>Step 3: Get a fresh start</Text>
        <Text variant='bodySmall'>
          {`When you're ready, run `}
          <Text variant='bodyMedium'>npm run reset-project</Text> to get a fresh{' '}
          <Text variant='bodyMedium'>app</Text> directory. This will move the current{' '}
          <Text variant='bodyMedium'>app</Text> to{' '}
          <Text variant='bodyMedium'>app-example</Text>.
        </Text>
        <Button onPress={signOut}>Logout!</Button>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
