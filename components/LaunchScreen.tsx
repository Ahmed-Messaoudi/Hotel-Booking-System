import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

interface LaunchScreenProps {
  navigation: NavigationProp<any>;
}

export default function LaunchScreen({ navigation }: LaunchScreenProps) {
  useEffect(() => {
    console.log('LaunchScreen loaded'); // Debugging line
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Navigate after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to MyApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
