import { StatusBar } from 'expo-status-bar';
import {React, useState} from "react";
import {StyleSheet, Text, View, Button, TouchableOpacity, TouchableOpacityComponent} from 'react-native';
import {Navbar} from "./src/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
    </View>
  );
}

const name = "Vanek";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
