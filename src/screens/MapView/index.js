import React from 'react';
import {
  Linking,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const INITIAL_REGION = {
  latitude: 16.073403,
  longitude: 108.231151,
  latitudeDelta: 0.04,
  longitudeDelta: 0.025,
};

const MARKER_DATA = [
  {
    title: 'Store 1',
    description: 'PNJ store',
    coordinate: {latitude: 16.067757, longitude: 108.230098},
  },
  {
    title: 'Store 2',
    description: 'FPT store',
    coordinate: {latitude: 16.074139, longitude: 108.231343},
  },
];

const MyMapView = ({navigation}) => {
  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
    }
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('lay dc diaj chi');
        } else {
          console.log('Khong cho');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const openGoogleMapsApp = () => {

    const currentRegion = {latitude: 16.073796, longitude: 108.233898};

    const coordinates = {latitude: 16.069231, longitude: 108.233103};

    const address = {
      saddr: `${currentRegion?.latitude},${currentRegion?.longitude}`,
      daddr: `${coordinates?.latitude},${coordinates?.longitude}`,
    };

    Linking.openURL(
      `http://maps.google.com/?saddr=${address.saddr}&daddr=${address.daddr}`,
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={INITIAL_REGION}>
        {MARKER_DATA.map(item => {
          return (
            <Marker
              key={item.title}
              title={item.title}
              description={item.description}
              coordinate={item.coordinate}
              onPress={() => {
              }}>
              <View style={styles.marker}>
                <Text style={styles.label}>{item.title}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>

      <View style={{flex: 1}}>
        <TouchableOpacity onPress={openGoogleMapsApp} style={styles.btn}>
          <Text>Open google maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyMapView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 2,
  },
  marker: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {fontSize: 12},
  btn: {
    margin: 10,
    backgroundColor: 'pink',
    width: 140,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});