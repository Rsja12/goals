import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}}>
      <View>
        <TextInput />
        <Button title='Add Goal' />
      </View>
      <View>

      </View>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
