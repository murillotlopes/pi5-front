import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from './colors';
import { useNavigation } from '@react-navigation/native';
import apiFinance from '../services/apiFinance';
import funcoes from '../util/funcoes';

export default function ComprarTitulo() {
  const data = [10, 11, 9, 12, 13, 15, 12, 14, 15, 17, 19, 16, 15, 18, 20]
  const contentInset = { top: 20, bottom: 20 }
  const [operacao, setOperacao] = useState({ tipo_operacao: '', data_operacao: '', titulo_investimento_id: '', valor: 0, quantidade: 0, ticket: '', usuario_id: '' })
  const [ticket, setTicket] = useState('')
  const [corretora, setCorretora] = useState('')
  const [dataCompra, setDataCompra] = useState('')
  const [valor, setValor] = useState(0)
  const [quantidade, setQuantidade] = useState(0)
  const [titulo, setTitulo] = useState({})

  const navigation = useNavigation();

  const buscarTitulo = async (ticket) => {
    const tituloBuscado = await apiFinance.tituloBuscar(ticket)
    setTitulo(tituloBuscado)
  }

  const cadastrar = async () => {
    setOperacao({
      tipo_operacao: 'COMPRA',
      data_operacao: funcoes.converteTimeStamp(dataCompra),
      titulo_investimento_id: titulo.id,
      valor: +valor,
      quantidade: +quantidade,
      ticket: titulo.ticket,
      usuario_id: 15
    })

    setTimeout(async () => {
      console.log(funcoes.converteTimeStamp(dataCompra), titulo.id, valor, quantidade, titulo.ticket, titulo.usuario_id)
      await apiFinance.operacaoSalvar(operacao).then(res => {
        alert('Operação Registrada')
        navigation.navigate('MeusAtivos')
      }).catch(err => {
        alert('Ocorreu um erro ao salvar a operação!')
      })
    }, 3000);
  }

  const cancelar = () => {
    navigation.navigate('MeusAtivos')
    console.log('cancelar')
  }
  const vender = () => {
    navigation.navigate('vendertitulo')
    console.log('vender')
  }
  const novotitulo = () => {
    navigation.navigate('cadastrartitulo')
    console.log('novo titulo')
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.textbotaoInativo}>Comprar</Text>
        <TouchableOpacity style={styles.botaoAtivo} onPress={novotitulo}>
          <Text style={styles.textBotaoAtivo}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoAtivo} onPress={vender}>
          <Text style={styles.textBotaoAtivo}>Vender</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 200, flexDirection: 'row' }}>
        <YAxis
          data={data}
          contentInset={contentInset}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={5}
          formatLabel={(value) => `${value}`}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={data}
          svg={{ stroke: 'rgb(0, 255, 255)' }}
          contentInset={contentInset}
        >
          <Grid />
        </LineChart>
      </View>
      <View style={styles.barra} />
      <View>
        <Text style={styles.label}>Ticker</Text>
        <TextInput style={styles.input} placeholder='ABCD4' value={ticket}
          onChangeText={setTicket} onBlur={() => buscarTitulo(ticket.toUpperCase())} />
        <Text style={styles.label}>Corretora</Text>
        <TextInput style={styles.input} value={corretora} onChangeText={setCorretora} />
        <Text style={styles.label}>Data</Text>
        <TextInput style={styles.input} placeholder='01/01/2023' keyboardType='numeric' value={dataCompra} onChangeText={setDataCompra} />
        <View style={styles.linha}>
          <View style={{ width: '40%' }}>
            <Text style={styles.label}>Preço</Text>
            <TextInput style={styles.input} keyboardType='numeric' value={valor} onChangeText={setValor} />
          </View>
          <View style={{ width: '40%' }}>
            <Text style={styles.label}>Quantidade</Text>
            <TextInput style={styles.input} keyboardType='numeric' value={quantidade} onChangeText={setQuantidade} />
          </View>
        </View>
      </View>
      <View style={styles.espaco} />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={cadastrar}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={cancelar}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    backgroundColor: colors.background,
    color: colors.textoPrincipal,
    margin: 0,
    width: '70%',
    alignSelf: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: colors.bordaTextInput,
    color: colors.textoInput,
    backgroundColor: colors.fundoTextInput,
    borderRadius: 5,
    padding: 5,
    marginVertical: 0,
    width: '70%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: colors.botaoPrincipal,
    borderRadius: 5,
    padding: 15,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    whidth: '45%'
  },
  buttonText: {
    color: colors.botaoTexto,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  barra: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
    borderColor: colors.borda,
    borderWidth: 1
  },
  espaco: {
    marginTop: 10,
    marginBottom: 10
  },
  botaoAtivo: {
    backgroundColor: colors.fundoBotaoAtivo,
    borderRadius: 5,
    margin: 10,
    padding: 5,
  },
  textBotaoAtivo: {
    color: colors.textoBotaoAtivo,
    fontSize: 20,
    margin: 0,
    padding: 0,
    borderRadius: 5,
    paddingHorizontal: 20

  },
  textbotaoInativo: {
    backgroundColor: colors.fundoBotaoInativo,
    color: colors.textoBotaoInativo,
    fontSize: 20,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 30
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center'
  }
});


