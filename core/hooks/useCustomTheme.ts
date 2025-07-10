import { DefaultTheme } from 'react-native-paper';

const useCustomTheme = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
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

  return { theme }
}

export default useCustomTheme