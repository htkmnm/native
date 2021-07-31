import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import Greeting from './src/components/Greeting';
import Counter from './src/components/Counter.js';
import Image from './src/components/image';

export default function App() {
  const hello = 'Hello world';
  const [count, setCount] = useState(0);
  const img = () => {
    <Image
      source={{ uri: 'https://picsum.photos/id/1035/367/267' }}
      style={{ width: 100, height: 100 }}
    />
  }
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const handlePress = () => {
    setText(name)
  }
  return (
    <View style={styles.container}>
      <Greeting text={hello} />
      <Counter count={count} setCount={setCount} />
      <Image image={img} />
      <TextInput style={{
        width: "30%",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
      }} value={name} onChange={e => setName(e.target.value)} />
      <Button onPress={handlePress} title='press' />
      <Text>こんにちは！{text}さん！</Text>
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
