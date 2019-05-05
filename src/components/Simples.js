import React from 'react';
import { Text } from 'react-native'

import Styles from '../styles/Styles'

export default function Simples({ text }) {
  return (
    <Text style={Styles.ex}>{text}</Text>
  );
}
