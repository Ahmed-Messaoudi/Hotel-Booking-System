import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/MainNavigator';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    // Use useEffect to simulate loading time for splash screen
    useEffect(() => {
        // Set a timeout for splash screen to be shown for 3 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds
    }, []);

    if (isLoading) {
        return (
            <View style={styles.splashContainer}>
                <Image 
                    source={require('./assets/applogo.png')} 
                    style={styles.splashImage} 
                />
                <Text style={styles.splashText}>Welcome to the Hotel Booking System</Text>
            </View>
        );
    }

    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007bff', // Set your desired background color for the splash screen
    },
    splashImage: {
        width: 400, // Set your desired width
        height: 400, // Set your desired height
        marginBottom: 20, // Add some margin between the image and the text
    },
    splashText: {
        color: '#fff',
        fontSize: 20,
    },
});
