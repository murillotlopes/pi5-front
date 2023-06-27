import React, { Component, useEffect, useState } from 'react';
import api from '../services/apiFinance';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './cardsTickets';
import { StyleSheet, ScrollView, View, Text, List, Form, SubmitButton } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BarraTotal from './barraTotal.js';
import BarraNavegacao from './barraNavegacao';
import { useNavigation } from '@react-navigation/native';
import colors from './colors';
import apiFinance from '../services/apiFinance';

export default function MeusAtivos() {

  const [lista, setLista] = useState([])

  // [
  //   { ticket: 'GGBR4', tipo: 'Ações', precoAtual: 25.50, quantidadeAcoes: 200 },
  //   { ticket: 'WEGE3', tipo: 'Ações', precoAtual: 36.88, quantidadeAcoes: 100 },
  //   { ticket: 'SLCE3', tipo: 'Ações', precoAtual: 37.11, quantidadeAcoes: 500 },
  //   { ticket: 'BOVA11', tipo: 'ETF', precoAtual: 102.50, quantidadeAcoes: 50 },
  //   { ticket: 'MXRF11', tipo: 'FII', precoAtual: 10.75, quantidadeAcoes: 1500 },
  //   { ticket: 'HGLG11', tipo: 'FII', precoAtual: 163.74, quantidadeAcoes: 132 },
  //   { ticket: 'XPLG11', tipo: 'FII', precoAtual: 109.37, quantidadeAcoes: 254 }
  // ]

  function calcularValorTotal(lista) {
    if (lista.length > 0) return lista.reduce((total, item) => total + item.precoAtual * item.quantidadeAcoes, 0)
    else return 0
  }

  // const navigation = useNavigation();

  // const AdicionarAtivo = () => {
  //   navigation.navigate('comprartitulo')
  //   console.log('comprartitulo')
  // }

  // setLista(apiFinance.operacoesListar())

  return (

    <>
      <BarraTotal
        total={calcularValorTotal(lista)}
        lucroPrejuizo={1000}
      />

      <ScrollView style={{ backgroundColor: colors.background }}>
        <View style={styles.cardContainer}>
          {lista.length > 0 ?? lista.map(item => <Card
            tipo={item.tipo}
            precoAtual={item.precoAtual}
            quantidadeAcoes={item.quantidadeAcoes}
            ticket={item.ticket} />)}
        </View>


      </ScrollView>

      {/*
            <TouchableOpacity onPress={AdicionarAtivo}>
                <View style={{padding:10, flexDirection:'row', justifyContent:'center', backgroundColor:'#000'}}>
                    <Icon name='add' backgroundColor='#fff' color='#000' size={24} />
                    <Text style={{fontSize:20, color:'#ccc', paddingLeft:10}}> Movimentação de ativos</Text>
                </View>
            </TouchableOpacity>
                */}

      <BarraNavegacao />

    </>
  );
}


const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});