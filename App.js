import React, {useState, useEffect} from "react";
import MapView, {Marker, Polyline, Geojson} from "react-native-maps";
import * as Location from 'expo-location'
import {StyleSheet, SafeAreaView, Text, Alert, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import { Settings } from "./src/Settings";



export default function App() {  
  //const [screenId, setScreen] = useState (null)

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView>
      <View> 
        <MapView
        style = {styles.map}
        showsUserLocation = {true}
        >
        </MapView>
        <View style = {styles.container}>
          <Navbar/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '10%'
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
