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

  return { theme }
}

export default useCustomTheme