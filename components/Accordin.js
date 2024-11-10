import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const Accordion = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleAccordion = () => {
    const initialValue = expanded ? 1 : 0;
    const finalValue = expanded ? 0 : 1;

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false, // animate height (not supported by native driver)
    }).start();

    setExpanded(!expanded);
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 70], // Adjust this value based on content height
  });

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        {expanded ? <AntDesign name="upcircleo" size={24} color="black" /> : <AntDesign name="downcircleo" size={24} color="black" />}
      </TouchableOpacity>

     
      <Animated.View style={[styles.content, { height: animatedHeight }]}>
        {expanded && <View style={styles.innerContent}>
            {children}
           
            </View>}
      </Animated.View>
    </View>
  );
};

export default Accordion;

// Accordion styles
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 5,
    borderRadius: 12,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadiusBottom: 12,
  },
  innerContent: {
    padding: 8,
  },
});
