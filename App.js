import React, {useState, useEffect} from "react";
import MapView, {Marker, Polyline, Geojson} from "react-native-maps";
import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager';
import { getDistance, getPreciseDistance } from 'geolib';
import {StyleSheet, SafeAreaView, Text, Alert, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import { Settings } from "./src/Settings";



export default function App() {  
  //const [screenId, setScreen] = useState (null)

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const objects  = [
    {lat: 55.026334310829746, lon: 73.29084894733343, text: "Омгту", dis: "Опорный вуз"}, // Omgtu
    {lat: 55.02657982937752, lon: 73.29162563013284, text: "Беляшка", dis: "Место силы"},  // Belyashi
    {lat: 55.022834055771355, lon: 73.3007476184818, text: "", dis: "Помойка"}, // Sibadi
    {lat: 54.98908860702379, lon: 73.37380802025677, text: "", dis: ""},
    {lat: 54.98081214340616, lon: 73.37283861867942, text: "", dis: ""},
    {lat: 54.983665825428595, lon: 73.38615157959566, text: "", dis: "з"},
    {lat: 54.97544628092211, lon: 73.39638718907906, text: "", dis: ""},
    {lat: 54.97017745957581, lon: 73.3800374647183, text: "", dis: ""},
    {lat: 54.97201184698291, lon: 73.41367768632284, text: "", dis: ""},
    {lat: 55.00326908940302, lon: 73.35077269189291, text: "", dis: ""}
  ];

  const TASK_FETCH_LOCATION = 'TASK_FETCH_LOCATION';

  const [latitude,setLatitude]=useState();
  const [longitude,setLongitude]=useState();

  TaskManager.defineTask(TASK_FETCH_LOCATION, ({ data: { locations }, error }) => {
  if (error) {
  // check error.message for more details.
  return;
  }
  setLatitude(locations[0].coords.latitude);
  setLongitude(locations[0].coords.longitude);
  //const detectLocation = (objects) => {
    objects.map((element) => {
      if(getDistance(
          { latitude: latitude, longitude: longitude },
          { latitude: element.lat, longitude: element.lon }
      ) <= 5)
      {
        alert("Вы приблизилсь к объекту");
      }
    })
  //}
  });

  Location.startLocationUpdatesAsync(TASK_FETCH_LOCATION, {
    accuracy: Location.Accuracy.Highest,
    distanceInterval: 1, // minimum change (in meters) betweens updates
    deferredUpdatesInterval: 1000, // minimum interval (in milliseconds) between updates
    // foregroundService is how you get the task to be updated as often as would be if the app was open
    foregroundService: {
      notificationTitle: 'Using your location',
      notificationBody: 'To turn off, go back to the app and switch something off.',
    },
  });

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
        followsUserLocation = {true}
        >
          {
            objects.map((element, index) => {
              return <Marker 
              coordinate={{latitude:element.lat, longitude:element.lon}}
              title={element.text}
              description={element.dis}
              ></Marker>
            })
          }
        </MapView>
        <View style = {styles.container}>
          <Navbar/>
          <Text>{JSON.stringify(latitude)+" "+JSON.stringify(longitude)}</Text>
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
