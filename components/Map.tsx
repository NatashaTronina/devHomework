import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Modal, TextInput, Button } from 'react-native';


interface MarkersData {
    title: string;
    description: string;
    coordinate: {
        latitude: number;
        longitude: number;
    };
}

const initialMarkers: MarkersData[] = []; 

export default function Map() {
    const [markers, setMarkers] = useState<MarkersData[]>(initialMarkers);
    const [modalVisible, setModalVisible] = useState(false);
    const [newMarker, setNewMarker] = useState<MarkersData>({ title: '', description: '', coordinate: { latitude: 0, longitude: 0 } });

    const markersArray = markers.map((marker, index) => (
        <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
        />
    ));

    const onLongMapPress = (e: any) => {
        setNewMarker({
            title: '',
            description: '',
            coordinate: {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
            }
        });
        setModalVisible(true);
    };

    const addMarker = () => {
        setMarkers([...markers, newMarker]);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 58.0195, 
                    longitude: 56.2235, 
                    latitudeDelta: 0.055,
                    longitudeDelta: 0.055 
                }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                showsMyLocationButton
                onLongPress={onLongMapPress}
            >
                {markersArray}
            </MapView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        <TextInput
                            placeholder="Название"
                            value={newMarker.title}
                            onChangeText={(text) => setNewMarker({ ...newMarker, title: text })}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Описание"
                            value={newMarker.description}
                            onChangeText={(text) => setNewMarker({ ...newMarker, description: text })}
                            style={styles.input}
                        />
                        <Button title="Добавить маркер" onPress={addMarker} />
                        <Button title="Закрыть" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    },
    modalView: {
        width: "80%",
        padding: 20,
        backgroundColor: '#D6ECD2',
        borderRadius: 10,
    },
    input: {
        borderRadius: 10,
        height: 40,
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 10,
        width: '100%',
        padding: 10,

    },
});
