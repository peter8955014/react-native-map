// MapScreen.tsx
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const MapScreen: React.FC = () => {
  const [markerList, setMarkerList] = useState([
    {
      latitude: 23.78825,
      longitude: 121.4324,
      title: "My Marker",
      description: "Some description"
    },
    {
      latitude: 23.05825,
      longitude: 120.4324,
      title: "cool place",
      description: "a point"
    }

  ])

  const initialRegion = {
    latitude: 23.78825,
    longitude: 121.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const MyCustomMarkerView = () => {

    return (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../assets/images/google-maps.png')} />
    )
  }

  const MyCallOutMarkerView = () => {
    return (
      <View style={styles.callout}>
        <Text style={styles.calloutText}>
          My CoustomCallOutView
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{
            latitude: 23.5004,
            longitude: 120.8885
          }}
        >
          <MyCustomMarkerView />
          <Callout>
            <MyCallOutMarkerView />
          </Callout>
        </Marker>

        {markerList.map((marker) => {
          return (
            <Marker
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              title={marker.title}
              description={marker.description}
            />
          )
        })}

      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  callout: {
    flex: 1,
    padding: 10,
  },
  calloutText: {
    flexShrink: 1, // 確保文本可以收縮以適應容器寬度
  },
});

export default MapScreen;
