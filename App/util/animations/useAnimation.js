import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const useAnimatedValue = () => {
  const ref = useRef(new Animated.Value(1));
  return ref.current;
};

const useAnimation = () => {
  const animatedValue = useAnimatedValue();
  const animate = () => {
    Animated.timing(animatedValue, {
      toValue: 2.5,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(animate);

  return animatedValue;
};

export default useAnimation;
