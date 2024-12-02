import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

const LoaderScreen = () => {
  const animationValues = useRef(
    Array.from({ length: 8 }, () => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const animations = animationValues.map((anim) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      );
    });

    animations.forEach((animation, index) => {
      setTimeout(() => {
        animation.start();
      }, index * 100); // Stagger the animations
    });

    return () => {
      animations.forEach((animation) => animation.stop());
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {animationValues.map((anim, index) => (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              {
                transform: [
                  {
                    translateY: anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -10], // Floating effect
                    }),
                  },
                ],
              },
            ]}
          />
        ))}
      </View>
      <Text style={styles.loadingText}>Loading</Text>
      <Text style={styles.descriptionText}>Getting your data ready...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  grid: {
    width: 80,
    height: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 64,
    backgroundColor: '#0C2D79',
    margin: 5,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});

export default LoaderScreen;
