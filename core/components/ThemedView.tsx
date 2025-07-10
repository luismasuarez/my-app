import useCustomTheme from '@/core/hooks/useCustomTheme';
import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

type ThemedContainerProps = ViewProps & {
  style?: ViewStyle | ViewStyle[];
  contained?: boolean;
  children: React.ReactNode;
};

export default function ThemedView({ style, contained, children, ...rest }: ThemedContainerProps) {
  const { theme } = useCustomTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background, paddingHorizontal: contained ? 20 : 'auto' },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
