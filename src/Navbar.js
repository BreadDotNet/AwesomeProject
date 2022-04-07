import React from "react";
import {View, Text, StyleSheet, SafeAreaView, Button} from "react-native";

import icons from "../constants/icons";
import {ImageBackground, TouchableOpacity} from "react-native-web";


export const Navbar = (props) => {
    return (
        <SafeAreaView>
            <View style = {styles.navbar}>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    navbar:{
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 10
    },
    language:{

    }
})