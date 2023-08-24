import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';

const MapG = ({ origin, destination }) => {
  const [currentOrigin, setCurrentOrigin] = useState(origin);
  const [currentDestination, setCurrentDestination] = useState(destination);
  const [region, setRegion] = useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04,
  });
  const mapRef = useRef(null);

  const key = GOOGLE_MAPS_KEY;
  const handleOriginMarkerDragEnd = (event) => {
    const newOrigin = event.nativeEvent.coordinate;
    console.log("New Origin:", newOrigin); // Check if newOrigin is correct
    setCurrentOrigin(newOrigin);

    // Update the region to center the map view on the new origin
    setRegion({
      ...region,
      latitude: newOrigin.latitude,
      longitude: newOrigin.longitude,
    });

    // Move the map to the new origin's position
    mapRef.current.animateToRegion({
      latitude: newOrigin.latitude,
      longitude: newOrigin.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={region}
        region={region}
      >
        <Marker
          draggable
          coordinate={origin}
          onDragEnd={handleOriginMarkerDragEnd}
        />
        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(event) =>
            setCurrentDestination(event.nativeEvent.coordinate)
          }
        />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={key}
          strokeColor="purple"
          strokeWidth={3}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapG;
