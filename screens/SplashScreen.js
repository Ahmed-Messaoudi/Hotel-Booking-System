// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

// Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hideAsync(); // Hide splash screen after a delay
      navigation.replace('Auth'); // Or navigate to 'App' depending on your logic
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
      <Text style={styles.splashText}>Welcome to Hotel Booking System!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SplashScreenComponent;
