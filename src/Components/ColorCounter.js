import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ColorCounter = (props) => {
    return <View>
        <Text>{props.color}</Text>
        <Button onPress={() => props.onIncrease()} title={`Increase ${props.color}`} />
        <Button onPress={() => props.onDecrease()} title={`Increase ${props.color}`} />
    </View>
}

const styles = StyleSheet.create({})

export default ColorCounter