import React from "react";
import {View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity ,Image} from "react-native";
import icons from "../constants/icons";


export const Navbar = props => {
    return (
        <View style = {styles.navbar}>
          <View  style = {styles.language}>
            <TouchableOpacity>
              <Image 
                source={icons.language}
                style = {styles.icons}
              /> 
            </TouchableOpacity>
          </View>
          <View  style = {styles.settings}>
            <TouchableOpacity>
              <Image
                source={icons.settings}
                style = {styles.icons}
              />
            </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        flexDirection: 'row',
    },
    language:{
        alignContent: 'center',
        left: '30%'
    },
    settings:{
        left: '250%',
        paddingEnd: 10
    },
    icons:{
        width: 80,
        height: 80
    }
})