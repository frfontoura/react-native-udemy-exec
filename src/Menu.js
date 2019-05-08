import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import { Inverter, MegaSena } from './components/Multi';
import Contador from './components/Contador';
import Plataformas from './components/Plataformas';
import ValidarProps from './components/ValidarProps';
import Evento from './components/Evento';
import Avo from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndireta'

export default createDrawerNavigator({
  TextoSincronizado: {
    screen: () => <TextoSincronizado />,
    navigationOptions: { title: 'Texto Sincronizado'}
  },
  Avo: {
    screen: () => <Avo />
  },
  Evento: {
    screen: () => <Evento />
  },
  ValidarProps: {
    screen: () => <ValidarProps year={19} />
  },
  Plataformas: {
    screen: () => <Plataformas msg='Parabens!!' />
  },
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
