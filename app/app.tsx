// app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from '@/components/LaunchScreen';
import LoginScreen from '@/components/LoginScreen';
import SignUpScreen from '@/components/SignUpScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Launch">
          <Stack.Screen
            name="Launch"
            component={LaunchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
  
}