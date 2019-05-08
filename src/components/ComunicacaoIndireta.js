import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Styles from '../styles/Styles';

export const Entrada = ({ texto, chamarQuandoMudar }) => (
  <View>
    <TextInput
      value={texto}
      style={Styles.input}
      onChangeText={chamarQuandoMudar}
    />
  </View>
);

export default function TextoSincronizado() {
  const [texto, setTexto] = useState('')

  return (
    <View>
      <Text style={Styles.font40}>{texto}</Text>
      <Entrada texto={texto} chamarQuandoMudar={setTexto} />
    </View>
  );
}
