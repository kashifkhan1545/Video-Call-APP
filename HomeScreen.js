// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [randomId, setRandomId] = useState('');
  const [username, setUsername] = useState(''); // Add username state
  const navigation = useNavigation();

  const generateRandomId = () => {
    return `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`;
  };

  const handleMakeCallPress = () => {
    // Validate the ID and username
    if (!randomId || randomId.length < 5 || !username) {
      Alert.alert('Error', 'Please enter a valid meeting ID (at least 5 characters) and username');
      return;
    }

    // Pass the generated meeting ID and username to the 'CallScreen' when navigating
    navigation.navigate('CallScreen', { meetingId: randomId, username });
  };

  return (
    <ImageBackground source={require('./bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.HeaderText}>Get Connected Now</Text>
        {/* Add an Image component below the text */}
        <Image source={require('./call.png')} style={styles.logoImage} />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 10,
            width: '65%',
            color: 'black',
            borderRadius: 10,
            backgroundColor: 'white',
          }}
          placeholder="Meeting ID"
          value={randomId}
          onChangeText={(text) => setRandomId(text)}
        />

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 10,
            backgroundColor: 'white',
            width: '65%',
            color: 'black',
            borderRadius: 10,
          }}
          placeholder="Enter Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TouchableOpacity onPress={handleMakeCallPress} style={styles.button}>
          <Icon name="video-camera" size={30} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Meet Now</Text>
        </TouchableOpacity>


        <View style={styles.generateIdWrapper}>
          <TouchableOpacity
            onPress={() => {
              const id = generateRandomId();
              setRandomId(id);
            }}>
            <Text style={{ color: 'white', fontSize: 17 }}>Generate Meeting ID</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.copytext}>© 2023 Developed By: Kashif Khan. All rights reserved!</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    color: 'white',
    fontSize: 35,
    marginBottom: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 25,
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#e74c3c',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    width: 250,
    marginBottom: 30,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },

  generateIdWrapper: {
    alignItems: 'center',
    marginBottom: 180,
  },

  logoImage: {
    width: 170, 
    height: 170, 
    marginBottom: 20, 
  },
  copytext: {
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 14, // Adjust font size as needed
    fontStyle: 'italic', // Example: You can add additional styles
  },
  
});

export default HomeScreen;
