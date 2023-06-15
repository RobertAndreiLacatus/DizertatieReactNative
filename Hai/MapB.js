import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapB = () => {
  const marker1Coords = { latitude: 37.6157, longitude: -0.98623 };
  const marker2Coords = { latitude: 37.625, longitude: -0.98623 };
  const marker3Coords = { latitude: 37.620, longitude: -0.98623 };

  const calculateDistance = (coord1, coord2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const lat1 = coord1.latitude;
    const lon1 = coord1.longitude;
    const lat2 = coord2.latitude;
    const lon2 = coord2.longitude;

    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance.toFixed(2); // Return distance rounded to 2 decimal places
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: 37.6157,
        longitude: -0.98623,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker
          coordinate={marker1Coords}
          title="Marker 1"
          description="Marker Description"
        />
        <Marker
          coordinate={marker2Coords}
          title="Marker 2"
          description="Marker Description"
        />
        <Marker
          coordinate={marker3Coords}
          title="Marker 3"
          description="Marker Description"
        />
        <Marker
          coordinate={{ latitude: (marker1Coords.latitude + marker2Coords.latitude) / 2, longitude: (marker1Coords.longitude + marker2Coords.longitude) / 2 }}
          title={`Distance between Mark1 and Mark2: ${calculateDistance(marker1Coords, marker2Coords)} km`}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignContent:'center',
    top:100,
  },
  map: {
    flex: 1,
  },
});

export default MapB;
