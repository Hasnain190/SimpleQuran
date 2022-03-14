import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesome } from "@expo/vector-icons/"



export default function Mic() {


  const [recording, setRecording] = React.useState();



  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started', recording);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
  }

  return (
    <View style={styles.container}>
      {
        recording ?
          <FontAwesome color="black" name="microphone" size={35} onPress={recording ? stopRecording : startRecording} /> :
          <FontAwesome name="microphone-slash" size={35} color="black" onPress={recording ? stopRecording : startRecording} />
      }

    </View>
  );
}

const styles = StyleSheet.create({


  container: {
    zIndex: 1,
    color: 'black'
  }
}); 