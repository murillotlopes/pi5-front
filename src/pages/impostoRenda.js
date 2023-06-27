import React from 'react';
import { ScrollView, StyleSheet , Text, TextInput ,View }  from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './cardsIR';
import colors from './colors';
import BarraNavegacao from './barraNavegacao';

export default function RelatorioIR() 
{

  const navigation = useNavigation();

  const atualizar = () => {
    console.log('Atualizar Relatório de Imposto de Renda')
  }

  const gerarDarf = () => {
    navigation.navigate('relatorioDarf')
  }

  return (
    <>
       <View style={{flexDirection:'row' , justifyContent:'center'}}>
        <Text style={styles.textbotaoInativo}>Imposto de Renda</Text>
        <TouchableOpacity style={styles.botaoAtivo} onPress={gerarDarf}>
          <Text style={styles.textBotaoAtivo}>Gerar DARF</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topo}>
        <View>
          <Text style={styles.label} width={50} >Ano</Text>
          <TextInput style={styles.input} width={50} keyboardType='numeric'></TextInput>
        </View>
      
        <TouchableOpacity style={styles.button} onPress={atualizar}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
    </View>

    <ScrollView style={{backgroundColor: '#222'}}>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
      
    </ScrollView>
    <BarraNavegacao/>

    </>

);
}

const styles = StyleSheet.create({
  topo:{
    backgroundColor:colors.background,
    height:'12%',
    paddingTop: 5,
    paddingLeft: 20,
    flexDirection:'row'
  },
  container: {
    flex:1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize:14,
    backgroundColor: colors.background,
    color: colors.textoPrincipal,
    margin:0,
    padding:2,
    width:'70%',
    alignSelf:'center',
    borderRadius:2
  },
  input: {
    borderWidth: 1,
    borderColor: colors.borda,
    color:colors.textoInput,
    backgroundColor: colors.fundoTextInput,
    borderRadius: 2,
    padding: 2,
    marginVertical: 0,
    width: '70%',
    alignSelf:'center',
  },
  button: {
    backgroundColor: colors.botaoPrincipal,
    borderRadius: 5,
    padding: 15,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    alignSelf:'center',
    whidth:'45%'
  },
  buttonText: {
    color: colors.botaoTexto,
    fontWeight: 'bold',
    alignSelf:'center',
  },
  barra:{
      alignSelf:'center',
      width: '80%',
      marginTop: 10,
      marginBottom: 10,
      borderColor:colors.borda,
      borderWidth:1
  },
  espaco:{
      marginTop: 10,
      marginBottom: 10
  },
  botaoAtivo:{
    backgroundColor: colors.fundoBotaoAtivo,
    borderRadius: 5,
    margin: 10,
    padding: 5,
},
textBotaoAtivo:{
    color: colors.textoBotaoAtivo,
    fontSize: 20,
    margin: 0,
    padding: 0,
    borderRadius: 5,
    paddingHorizontal: 20

},
textbotaoInativo:{
    backgroundColor: colors.fundoBotaoInativo,
    color: colors.textoBotaoInativo,
    fontSize:20,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 30
},
});