import { Tabs } from 'expo-router';

import { HapticTab } from '@/core/components/HapticTab';
import { Colors } from '@/core/constants/Colors';
import { useColorScheme } from '@/core/hooks/useColorScheme';

import { BlurView } from 'expo-blur';
import { Home, Send } from 'lucide-react-native';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].secondary,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].onBackground,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <BlurView
            tint='regular'
            intensity={80}
            style={{ flex: 1 }}
          />
        ),
        tabBarStyle: {
          position: 'absolute', // Necesario para BlurView
          borderTopWidth: 0,    // Opcional: quita el borde superior
          backgroundColor: 'transparent', // Importante para que se vea el blur
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Send size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
