import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListsScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 10 },
        { name: 'Friend #2', age: 12 },
        { name: 'Friend #3', age: 34 },
        { name: 'Friend #4', age: 50 },
        { name: 'Friend #5', age: 20 },
        { name: 'Friend #6', age: 16 },
        { name: 'Friend #7', age: 13 },
    ]

    return (
        <FlatList
            data={friends}
            keyExtractor={friend => friend.name}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    )

}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})
export default ListsScreen