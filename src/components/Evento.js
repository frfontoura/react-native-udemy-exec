import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Styles from '../styles/Styles';

export default function Evento() {
  const [text, setText] = useState('')
  
  return (
    <View>
      <Text style={Styles.font40}>{text}</Text>
      <TextInput value={text}
        style={Styles.input}
        onChangeText={t => setText(t)} />
    </View>
  );
}
