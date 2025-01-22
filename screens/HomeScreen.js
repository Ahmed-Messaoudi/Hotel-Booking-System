import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const handleLogout = async () => {
        await AsyncStorage.removeItem('user');
        navigation.replace('Auth');
    };

    // Sample room data
    const rooms = [
        { id: '1', name: 'Deluxe Room', description: 'A spacious room with ocean view', price: '100 DT' },
        { id: '2', name: 'Standard Room', description: 'Comfortable room with city view', price: '60 DT' },
        { id: '3', name: 'Single Room', description: 'Perfect for solo travelers', price: '40 DT' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Hotel Booking System!</Text>

            {/* Room Cards */}
            <View style={styles.roomContainer}>
                {rooms.map((room) => (
                    <TouchableOpacity
                        key={room.id}
                        style={styles.roomCard}
                        onPress={() => navigation.navigate('Booking', { roomId: room.id })}
                    >
                        <Text style={styles.roomName}>{room.name}</Text>
                        <Text style={styles.roomDescription}>{room.description}</Text>
                        <Text style={styles.roomPrice}>{room.price}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Go to Booking */}
            <Button title="Go to Booking" onPress={() => navigation.navigate('Booking')} />
            
            {/* Logout Button */}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
    roomContainer: { marginTop: 20 },
    roomCard: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    roomName: { fontSize: 18, fontWeight: 'bold' },
    roomDescription: { marginTop: 5, fontSize: 14, color: '#666' },
    roomPrice: { marginTop: 10, fontSize: 16, fontWeight: 'bold', color: '#333' },
});

export default HomeScreen;
