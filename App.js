import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text>Hi! I am Muhammad Shahnewaz</Text>
      <Text style={{fontSize: '40px'}}>{name}</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text => setName(text)}
        defaultValue=""
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
