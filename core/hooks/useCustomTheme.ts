import { useFonts } from 'expo-font';
import { DefaultTheme } from 'react-native-paper';
import { Colors } from '../constants/Colors';
import { useColorScheme } from './useColorScheme';

const useCustomTheme = () => {
  const themeStyle = useColorScheme()

  const [fontsLoaded] = useFonts({
    "SmallFont": require('../../assets/fonts/RobotoSlab-Regular.ttf'),
    "MediumFont": require('../../assets/fonts/RobotoSlab-Medium.ttf'),
    "LargeFont": require('../../assets/fonts/RobotoSlab-Bold.ttf'),
  });

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors[themeStyle ?? 'light'],
    },
    fonts: {
      ...DefaultTheme.fonts,
      displayLarge: { ...DefaultTheme.fonts.displayLarge, fontFamily: 'LargeFont' },
      displayMedium: { ...DefaultTheme.fonts.displayMedium, fontFamily: 'MediumFont' },
      displaySmall: { ...DefaultTheme.fonts.displaySmall, fontFamily: 'SmallFont' },
      headlineLarge: { ...DefaultTheme.fonts.headlineLarge, fontFamily: 'LargeFont' },
      headlineMedium: { ...DefaultTheme.fonts.headlineMedium, fontFamily: 'MediumFont' },
      headlineSmall: { ...DefaultTheme.fonts.headlineSmall, fontFamily: 'SmallFont' },
      titleLarge: { ...DefaultTheme.fonts.titleLarge, fontFamily: 'LargeFont' },
      titleMedium: { ...DefaultTheme.fonts.titleMedium, fontFamily: 'MediumFont' },
      titleSmall: { ...DefaultTheme.fonts.titleSmall, fontFamily: 'SmallFont' },
      bodyLarge: { ...DefaultTheme.fonts.bodyLarge, fontFamily: 'LargeFont' },
      bodyMedium: { ...DefaultTheme.fonts.bodyMedium, fontFamily: 'MediumFont' },
      bodySmall: { ...DefaultTheme.fonts.bodySmall, fontFamily: 'SmallFont' },
      labelLarge: { ...DefaultTheme.fonts.labelLarge, fontFamily: 'LargeFont' },
      labelMedium: { ...DefaultTheme.fonts.labelMedium, fontFamily: 'MediumFont' },
      labelSmall: { ...DefaultTheme.fonts.labelSmall, fontFamily: 'SmallFont' },
    },
  };

  return { theme, fontsLoaded }
}

export default useCustomTheme