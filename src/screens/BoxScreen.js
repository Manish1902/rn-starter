import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        {/* <Text style={styles.textOneStyle}>Child 1</Text>
        <Text style={styles.textTwoStyle}>Child 2</Text>
        <Text style={styles.textThreeStyle}>Child 3</Text> */}
        <View style={styles.viewOneStyle} />
        <View style={styles.viewTwoStyle} />
        <View style={styles.viewThreeStyle} />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        top: 50
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    }

    // textStyle: {
    //     borderWidth: 3,
    //     backgroundColor: 'red',
    // },
    // textStyle: {
    //     borderWidth: 3,
    //     backgroundColor: 'green',
    // },
    // textStyle: {
    //     borderWidth: 3,
    //     backgroundColor: 'blue',
    // }
})

export default BoxScreen