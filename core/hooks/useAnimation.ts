import { useRef } from "react";
import { Animated, Easing } from "react-native";

const useAnimation = () => {
  const animationOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;
  const animatedBottom = useRef(new Animated.Value(100)).current;

  const fadeIn = ({ duration = 300, toValue = 1, callback = () => { } }) => {
    Animated.timing(animationOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({ duration = 300, toValue = 0, callback = () => { } }) => {
    Animated.timing(animationOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const startMovingTopPosition = ({
    initialPosition = 0,
    duration = 300,
    easing = Easing.linear,
    callback = () => { },
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: duration,
      easing: easing,
      useNativeDriver: true,
    }).start(callback);
  };

  const startMovingBottomPosition = ({
    initialPosition = 0,
    duration = 300,
    easing = Easing.linear,
    callback = () => { },
  }) => {
    animatedBottom.setValue(initialPosition);
    Animated.timing(animatedBottom, {
      toValue: 0,
      duration: duration,
      easing: easing,
      useNativeDriver: true,
    }).start(callback);
  };

  return {
    // Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
    startMovingBottomPosition,

    // Properties
    animationOpacity,
    animatedTop,
    animatedBottom,
  };
};

export default useAnimation;