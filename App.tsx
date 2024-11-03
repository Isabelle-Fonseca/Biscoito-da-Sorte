import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

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

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      img: require('./assets/biscoitoAberto.png'),
      txtBotao: 'Resortear',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>{this.state.txtBotao}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;