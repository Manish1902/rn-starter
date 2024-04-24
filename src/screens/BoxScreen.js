import React from 'react';
import {View,StyleSheet, Text} from 'react-native'

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Hello there</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: black
    },
    textStyle: {
        borderWidth: 1,
        backgroundColor: red
    }
})

export default BoxScreen