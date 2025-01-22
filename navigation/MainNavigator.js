import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogoutScreen from '../screens/LogoutScreen';

// Create navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// MainNavigator
const MainNavigator = () => {
    const AuthStack = () => (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );

    const AppDrawer = () => {
        const handleLogout = async (navigation) => {
            await AsyncStorage.removeItem('user');
            navigation.replace('Auth');
        };

        return (
            <Drawer.Navigator
                initialRouteName="Home"
            >
                {/* Home Screen */}
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Ionicons name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                    }}
                />

                {/* Booking Screen */}
                <Drawer.Screen
                    name="Booking"
                    component={BookingScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Ionicons name="book" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                    }}
                />

                {/* Profile Screen */}
                <Drawer.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Ionicons name="person" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Logout"
                    component={LogoutScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Ionicons name="log-out" size={size} color={focused ? '#7cc' : '#ccc'} />
                        ),
                    }}
                />
                
            </Drawer.Navigator>
        );
    };

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

// Custom Drawer Content with Logout Button
const CustomDrawerContent = ({ handleLogout, navigation }) => {
    return (
        <View style={styles.drawerContent}>
            <View style={styles.logoutContainer}>
                <TouchableOpacity onPress={() => handleLogout(navigation)} style={styles.logoutButton}>
                    <Ionicons name="log-out" size={24} color="#fff" />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        paddingTop: 40, // Adds padding to the top to prevent overlapping
    },
    logoutContainer: {
        marginTop: 'auto', // Ensures logout is at the bottom
        paddingBottom: 20,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f44336',
        padding: 12,
        borderRadius: 5,
        justifyContent: 'center',
    },
    logoutText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 16,
    },
});

export default MainNavigator;
