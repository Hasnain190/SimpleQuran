import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Ayahs from '../Ayahs'
import Listener from '../Listener'



export default function ReadingPage() {

    return (
        <View style={styles.container}>
            <Listener />

            <Ayahs />



        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        alignContent: 'flex-start',
        width: '100%'

    }

})