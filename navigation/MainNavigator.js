import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    const AuthStack = () => (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );

    const AppDrawer = () => (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Booking" component={BookingScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Auth"
                component={AuthStack}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="App"
                component={AppDrawer}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default MainNavigator;
