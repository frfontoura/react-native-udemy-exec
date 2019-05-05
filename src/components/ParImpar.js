import React from 'react';
import { View, Text } from 'react-native'

import Styles from '../styles/Styles'

export default function ParImpar({ number }) {

  function parOuImpar() {
    const v = number % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Styles.ex}>{v}</Text>
  }

  return (
    <View>
      {parOuImpar()}
    </View>
  );
}
