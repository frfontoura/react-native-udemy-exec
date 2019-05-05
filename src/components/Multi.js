import React from 'react';
import { Text } from 'react-native'

import Style from '../styles/Styles'

export function Inverter({ text }) {
  const inv = text.split('').reverse().join('');
  return <Text style={Style.ex}>{inv}</Text>;
}

export function MegaSena({ qtd }) {
  const [min, max] = [1, 60];
  const numeros = Array(qtd || 6).fill(0);

  for(let i = 0; i < numeros.length; i++) {
    let novo = 0;
    while(numeros.includes(novo)){
      novo = Math.floor(Math.random() * (max - min + 1)) + min
    }
    numeros[i] = novo
  }

  numeros.sort((a, b) => a - b)
  return <Text style={Style.ex}>{numeros.join(', ')}</Text>;
}
