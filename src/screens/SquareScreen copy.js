import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_INCREMENT = 10

const SquareSreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {

        switch (color) {
            case 'red':
                red + change < 0 || red + change > 255 ? null : setRed(red + change);
                return;
            case 'green':
                green + change < 0 || green + change > 255 ? null : setRed(green + change);
                return;
            case 'blue':
                blue + change < 0 || blue + change > 255 ? null : setRed(blue + change);
                return;
            default:
                return;
        }
    }

    return <View>
        <ColorCounter onIncrease={() => setColor('red', COLOR_INCREMENT)} onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} color="Red" />
        <ColorCounter onIncrease={() => setColor('green', COLOR_INCREMENT)} onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} color="Green" />
        <ColorCounter onIncrease={() => setColor('blue', COLOR_INCREMENT)} onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} color="Blue" />

        <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
}

const styles = StyleSheet.create({})

export default SquareSreen