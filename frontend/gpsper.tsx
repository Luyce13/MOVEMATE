// App.js

import React, { useState } from 'react';
import { View, Text, Button, Alert, Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';



const API_URL = '  https://www.google.com/maps/embed/v1/MAP_MODE?key=&parameters';

const Gps = () => {
  const [loading, setLoading] = useState(false);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to get your current position.',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          Alert.alert('Location Permission Denied', 'Please enable location access to use this feature.');
        }
      } else {
        getLocation();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocation = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        sendLocationToServer(latitude, longitude);
      },
      (error) => {
        console.log('Error getting location:', error);
        setLoading(false);
        Alert.alert('Location Error', 'Failed to get your current location.');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const sendLocationToServer = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.post(API_URL, {
        latitude,
        longitude,
      });
      setLoading(false);
      console.log('Location sent successfully:', response.data);
      Alert.alert('Location Sent', 'Your location has been sent to the server.');
    } catch (error) {
      console.error('Error sending location:', error);
      setLoading(false);
      Alert.alert('Location Sending Error', 'Failed to send your location to the server.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Location Tracker</Text>
      <Button title={loading ? 'Getting Location...' : 'Get Location'} onPress={requestLocationPermission} disabled={loading} />
    </View>
  );
};

export default Gps;