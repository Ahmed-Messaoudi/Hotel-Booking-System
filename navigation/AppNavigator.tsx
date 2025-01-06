// tabs/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '@/components/LaunchScreen'; // Assuming LaunchScreen is under tabs folder
import LoginScreen from '@/components/LoginScreen';  // Assuming LoginScreen is under tabs folder
import SignUpScreen from '@/components/SignUpScreen'; // Assuming SignUpScreen is under tabs folder

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch">
        <Stack.Screen
          name="Launch"
          component={LaunchScreen}
          options={{ headerShown: false }} // Hide header for LaunchScreen
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header for LoginScreen
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{ headerShown: false }} // Hide header for SignUpScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
