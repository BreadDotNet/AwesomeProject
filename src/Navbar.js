import React from "react";
import {View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity ,Image} from "react-native";
import icons from "../constants/icons";


export const Navbar = props => {
    return (
        <SafeAreaView style = {styles.navbar}>
            <TouchableOpacity>
              <Image 
                source={icons.language}
                style = {styles.language}
              />  
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    navbar:{
        justifyContent: 'space-around',
        height: 70,
        paddingBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    language:{
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        width: 40,
        height: 40
    }
})