import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface State {
  textoFrase: string;
  img: any; 
  txtBotao: string;
}

class App extends Component<{}, State> {
  private frases: string[];

  constructor(props: {}) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./assets/biscoito.png'),
      txtBotao: 'Abrir biscoito',
    };
    
    this.frases = [];
  }

  render() {
    return (
      <View>
        <Image  />
        <Text ></Text>
        <TouchableOpacity >
          <View >
            <Text ></Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;