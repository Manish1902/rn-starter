import React from "react";
import {Text,StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
    const username = "Manish"
    
    return ( 
    <View>
        <Text style={styles.textStyle1} >Getting Started with react native!</Text>
        <Text style={styles.textStyle2}>My name is {username}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
})

export default ComponentsScreen