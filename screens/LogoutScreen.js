import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutScreen = ({ navigation }) => {
    const handleLogout = async () => {
        await AsyncStorage.removeItem('user');
        navigation.replace('Auth'); // Navigates to the Auth screen (Login/Signup)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.message}>You have been logged out successfully!</Text>
            <Button title="Logout" onPress={handleLogout} color="#f44336" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    message: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default LogoutScreen;
