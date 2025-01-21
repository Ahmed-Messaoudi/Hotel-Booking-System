import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const handleLogout = async () => {
        await AsyncStorage.removeItem('user');
        navigation.replace('Auth');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Hotel Booking System!</Text>
            <Button title="Go to Booking" onPress={() => navigation.navigate('Booking')} />
            <Button title="Logout" onPress={handleLogout} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
});

export default HomeScreen;
