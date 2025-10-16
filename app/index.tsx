
import React, { useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const initialMarkers = [
    {
        title: 'Hello',
        description: 'World',
        coordinate: {
            latitude: 58.010259, 
            longitude: 56.2341595
        },
    },
    {
        title: 'Hello2',
        description: 'World2',
        coordinate: {
            latitude: 58.010359, 
            longitude: 56.234195
        },
    },
];


export default function Index() {
    const [markers, setMarkers] = useState(initialMarkers);
    const markersArray = initialMarkers.map((marker, index) => (
        <Marker
        key={index}
        coordinate={marker.coordinate}
        title={marker.title}
        description={marker.description}
        />
    ))
    const onMapPress = (e: any) => {
        console.log(e.nativeEvent.coordinate);
        setMarkers([
            ...markers,
            {
                title: 'Hello',
                description: 'World',
                coordinate: {
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude
                }
            }
        ])
    }
    return (
        <View style={styles.container}>
           <MapView style={styles.map}
            initialRegion={{
                latitude: 58.010259,
                longitude: 56.234195,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
                
            }}
            onLongPress={onMapPress}
            >
                {markersArray}
            </MapView> 
        </View> 
    )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
