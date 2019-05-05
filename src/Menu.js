import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import { Inverter, MegaSena } from './components/Multi';
import Contador from './components/Contador'

export default createDrawerNavigator({
  Contador: {
    screen: () => <Contador />
  },
  MegaSena: {
    screen: () => <MegaSena qtd={6} />,
    navigationOptions: { title: 'Mega Sena'}
  },
  Inverter: {
    screen: () => <Inverter text="React Native!" />
  },
  ParImpar: {
    screen: () => <ParImpar number={11} />,
    navigationOptions: { title: 'Par ou Impar' }
  },
  Simples: {
    screen: () => <Simples text="Teste" />
  }
}, { drawerWidth: 300 });
