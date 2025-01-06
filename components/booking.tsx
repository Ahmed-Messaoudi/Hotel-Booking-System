import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function BookingFormScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dates, setDates] = useState('');
  const room = { type: 'Deluxe Room', price: 100 }; // You can adjust this to your dynamic data source

  const handleBooking = () => {
    if (!name || !email || !dates) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    Alert.alert('Success', `Booking confirmed for ${room.type}!`);
  };

  return (
    <ThemedView style={styles.container}>
      <Image source={require('@/assets/images/hotel.jpg')} style={styles.headerImage} />
      <ThemedText type="title">Book Your Stay</ThemedText>
      <Text style={styles.roomInfo}>Room: {room.type}</Text>
      <Text style={styles.roomInfo}>Price: ${room.price}/night</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Dates (e.g., 2025-01-10 to 2025-01-15)"
        value={dates}
        onChangeText={setDates}
      />

      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  roomInfo: {
    fontSize: 18,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
