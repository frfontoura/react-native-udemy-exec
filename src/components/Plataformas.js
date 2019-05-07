import React from 'react';
import { Button, Alert, ToastAndroid, Platform } from 'react-native'

export default function Plataformas({ msg }) {

  function notificar() {
    if(Platform.OS === 'android'){
      ToastAndroid.show('Android: ' + msg, ToastAndroid.LONG);
    } else {
      Alert.alert('Informação', msg)
    }
  }

  return (
    <Button title='Plataforma?' onPress={notificar} />
  );
}
