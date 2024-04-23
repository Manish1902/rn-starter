import React, { useState} from "react";
import { View, Text, StyleSheet, TextInput, BackHandler } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('')

    return <View>
        <Text>Enter Password</Text>
        <TextInput
            style={styles.input}
            autoCorrect={flase} 
            autoCapitalize="none"
            value={name}
            onChangeText={(newValue)=> setName(newValue)}
        />
        <Text>My name is {name}</Text>
        {name.length < 5 ? <Text>Password must be of atleast 5 length</Text> : null}
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: black,
        borderWidth: 1
    }
})

export default TextScreen