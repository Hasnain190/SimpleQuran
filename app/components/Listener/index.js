import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

import Mic from '../mic'


const Listener = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container}>
                <Mic />


            </View>
        </SafeAreaView>
    )
}

export default Listener

const styles = StyleSheet.create({

    container: {
        zIndex: 1,
        position: 'absolute',
        bottom: 10,
        left: 0,
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center'

    }
})