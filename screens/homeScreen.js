import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Create a functional component for the home screen
const HomeScreen = ({ navigation }) => {
  const handleStartPress = () => {
    // Navigate to the SecondPage when the "Start" button is pressed
    navigation.navigate('BanListScreen');
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Welcome to Thrust Gaming BanListApp :D </Text>

      {/* Start Button */}
      <TouchableOpacity style={styles.button} onPress={handleStartPress}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

// Export the component
export default HomeScreen;