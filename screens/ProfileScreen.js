import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await AsyncStorage.getItem('user');
            if (userData) {
                const { email, name = '' } = JSON.parse(userData);
                setEmail(email);
                setName(name);
            }
        };

        fetchUserData();
    }, []);

    const handleSaveProfile = async () => {
        try {
            const updatedData = { email, name };
            await AsyncStorage.setItem('user', JSON.stringify(updatedData));
            setIsEditing(false);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Failed to save profile:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Profile</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                editable={isEditing}
                placeholder="Name"
            />
            <TextInput
                style={styles.input}
                value={email}
                editable={false}
                placeholder="Email"
            />
            {isEditing ? (
                <Button title="Save" onPress={handleSaveProfile} />
            ) : (
                <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
    },
});

export default ProfileScreen;
