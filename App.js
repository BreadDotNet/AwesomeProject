import React, {useState, useEffect} from "react";
import MapView, {Marker, Polyline, Geojson} from "react-native-maps";
import Geolocation from "react-native-geolocation-service"
import {StyleSheet, View, Text, Alert} from 'react-native';
import {Navbar} from "./src/Navbar";



export default function App() {
  return (
    <View>
      <MapView
        style = {styles.map}
        showsUserLocation = {true}
      >
      </MapView>
      <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  map: {
    width: '100%',
    height: '90%'
  }
});
