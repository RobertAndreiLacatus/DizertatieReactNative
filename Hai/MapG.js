import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { useState } from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from '@env'




const MapG = () => {

  const [origin,setOrigin]=useState({
    latitude:46.7712,
    longitude:23.6236,
  });

  const [destination,setDestination]=useState({
    latitude:46.7712,
    longitude:22.6236,
  });

  const key=GOOGLE_MAPS_KEY



  return (
    <View style={styles.container} >
      <MapView 
      style={styles.map}
      initialRegion={{
        latitude:origin.latitude,
        longitude:origin.longitude,
        latitudeDelta:0.09,
        longitudeDelta:0.04
      }}
      
      
      ><Marker draggable coordinate={origin} onDragEnd={(direction)=>setOrigin(direction.nativeEvent.coordinate)}/>
      <Marker draggable coordinate={destination} onDragEnd={(direction)=>setDestination(direction.nativeEvent.coordinate)}/>
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

const styles=StyleSheet.create({
  container:{
    flex:1,
    
    alignItems:'center',
    justifyContent:'center',
    },
    map:{
      width:'87%',
      height:'35%'
    }
})


export default MapG;
