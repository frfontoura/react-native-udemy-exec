import React, { useState } from 'react';

import { View, Text, TouchableHighlight } from 'react-native';

export default function Contador({ numInicial = 0 }) {
  const [ num, setNum ] = useState(numInicial)

  return (
    <View>
      <Text style={{ fontSize: 40 }}>{num}</Text>
      <TouchableHighlight
        onPress={() => setNum(num + 1)}
        onLongPress={() => setNum(numInicial)}>
        <Text>Incrementar / Zerar</Text>  
      </TouchableHighlight>
    </View>
  );
}


//export default class Contador extends Component {
//  
//  state = {
//    num: this.props.numInicial || 0
//  }
//
//  maisUm = () => {
//    this.setState({ num: this.state.num + 1 })
//  }
//
//  limpar = () => {
//    this.setState({ num: this.props.numInicial || 0 })
//  }
//  
//  render() {
//    return (
//      <View>
//        <Text style={{ fontSize: 40 }}>{this.state.num}</Text>
//        <TouchableHighlight
//          onPress={this.maisUm}
//          onLongPress={this.limpar}>
//          <Text>Incrementar / Zerar</Text>  
//        </TouchableHighlight>
//      </View>
//    );
//  }
//}
