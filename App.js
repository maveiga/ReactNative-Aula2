import React, { Component } from "react";
import { View, Text,Image, Button, StyleSheet, TouchableOpacity } from "react-native";

class App extends Component{
  frases=['A vida trará coisas boas se tiver paciência',
  'Não há que ser forte. Há que ser flexível.',
  'Siga os bons e aprenda com eles']
  
  constructor(props){
    super(props)
    this.state={
      nome:"",
      imagemAtual: require('./assets/biscoito.png')
    }
    this.mudarNome = this.mudarNome.bind(this)
    this.trocarImagem = this.trocarImagem.bind(this)
  }
    
  mudarNome(frases){
    this.setState({
      nome:frases
    })
  }

  trocarImagem(){
    const novaImagem = this.state.imagemAtual === require('./assets/biscoito.png')
      ? require('./assets/biscoitoQuebrado.png')
      : require('./assets/biscoito.png');
    this.setState({ imagemAtual: novaImagem });
  }

  render(){
    return(
      
      <View style={{backgroundColor:"white", marginTop:40}}>
      
      <Image
        
          source={this.state.imagemAtual}
          style={{width:400,height:450, textAlign:'center'}}>

      </Image>

        <Text style={{fontSize:30, textAlign:'center',color:"red", margin:20}}>
         {this.state.nome}
        </Text>
        <TouchableOpacity style={styles.botao} onPress={()=>this.mudarNome(this.frases[Math.floor(Math.random() * this.frases.length)])}>
        <Text style={styles.textoGeral}>Quebrar Biscoito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={this.trocarImagem}>
          <Text style={styles.textoGeral}>Trocar Imagem</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

const styles =StyleSheet.create({
  textoGeral:{
    fontSize: 25,
    color:"orange",
    textAlign:'center'
  },
  botao:{
    backgroundColor:'white',
    borderRadius:50,
    height:50,
    borderWidth:1,
    borderColor:"#841584"
  }
});

export default App;
