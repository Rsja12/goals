import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
        <TextInput 
          placeholder='Enter your goal' 
          style={{width: '80%', borderBottomColor: 'black', borderWidth: 1, padding: 10}} 
        />
        <Button title='Add' />
      </View>
      <View>

      </View>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
