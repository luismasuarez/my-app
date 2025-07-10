import React from 'react';
import { StyleSheet, TextProps, TextStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

type ThemedTextProps = TextProps & {
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
};

export default function ThemedText({ style, children, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        styles.text,
        { color: theme.colors.onBackground },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
