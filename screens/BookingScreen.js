import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const BookingScreen = () => {
    const [roomNumber, setRoomNumber] = useState('');
    const [bookings, setBookings] = useState([]);

    const handleBookRoom = () => {
        if (roomNumber.trim() === '') {
            alert('Please enter a valid room number.');
            return;
        }

        const newBooking = { id: Date.now().toString(), roomNumber };
        setBookings([...bookings, newBooking]);
        setRoomNumber('');
    };

    const handleCancelBooking = (id) => {
        const updatedBookings = bookings.filter((booking) => booking.id !== id);
        setBookings(updatedBookings);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Book a Room</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Room Number"
                value={roomNumber}
                onChangeText={setRoomNumber}
            />
            <Button title="Book Room" onPress={handleBookRoom} />

            <Text style={styles.subtitle}>Your Bookings:</Text>
            <FlatList
                data={bookings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.bookingItem}>
                        <Text>Room: {item.roomNumber}</Text>
                        <Button
                            title="Cancel"
                            onPress={() => handleCancelBooking(item.id)}
                            color="red"
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    subtitle: { fontSize: 18, marginVertical: 10 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    bookingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});

export default BookingScreen;
