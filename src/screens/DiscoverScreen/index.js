import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DiscoverScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Discover Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
