import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';
import io from 'socket.io-client';

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Label = Styled.Text`
    font-size: 24px;
`;

var socket = io('http://10.117.118.71:4567', {
  transports: ['websocket'],
});
interface ILocation {
  latitude: number;
  longitude: number;
  altitude?: number | null;
  accuracy: number;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
}

const WatchLocation = () => {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const {
          latitude,
          longitude,
          altitude,
          accuracy,
          altitudeAccuracy,
          heading,
          speed,
        } = position.coords;
        setLocation({
          latitude,
          longitude,
          altitude,
          accuracy,
          altitudeAccuracy,
          heading,
          speed,
        });
        // Emit location data to server
        socket.emit('location', {longitude, latitude}, 'bus1', (ack: any) => {
          console.log('Location data sent:', ack);
        });
      },
      error => {
        console.log('Geolocation error:', error.message);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 50,
        fastestInterval: 20,
      },
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  // Log socket connection events
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket connected');
    });

    socket.on('connect_error', error => {
      console.log('Socket connection error:', error.message);
    });

    socket.on('disconnect', reason => {
      console.log('Socket disconnected:', reason);
    });

    return () => {
      // Clean up event listeners
      socket.off('connect');
      socket.off('connect_error');
      socket.off('disconnect');
    };
  }, []);

  return (
    <Container>
      {location ? (
        <>
          <Label>Latitude: {location.latitude}</Label>
          <Label>Longitude: {location.longitude}</Label>
          <Label>Altitude: {location.altitude}</Label>
          <Label>Accuracy: {location.accuracy}</Label>
          <Label>Altitude Accuracy: {location.altitudeAccuracy}</Label>
          <Label>Heading: {location.heading}</Label>
          <Label>Speed: {location.speed}</Label>
        </>
      ) : (
        <Label>Loading...</Label>
      )}
    </Container>
  );
};

export default WatchLocation;
