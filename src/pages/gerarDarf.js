import React, { Component, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './cardsDarf';
import {StyleSheet, ScrollView,View,Text,List,Form,SubmitButton} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BarraNavegacao from './barraNavegacao';
import { useNavigation } from '@react-navigation/native';
import colors from './colors';
export default function MeusAtivos() {

    const [lista, setLista] = useState([
      {tipo: 'Ações', Total_Venda: 100.00, Lucro_Prejuizo: 15.00, pagar_credito: 0.0},
      {tipo: 'Day Trade', Total_Venda: 200.00, Lucro_Prejuizo: 5.00, pagar_credito: 1.99},
      {tipo: 'FII', Total_Venda: 50.00, Lucro_Prejuizo: 52.00, pagar_credito: 10.10},
      {tipo: 'ETF', Total_Venda: 1500.00, Lucro_Prejuizo: 85.00, pagar_credito: 300.00}
    ])

    const navigation = useNavigation();

    const impostoRenda = () => {
      navigation.navigate('impostoRenda')
    }
    
      return (

            <>
            <View style={{flexDirection:'row' , justifyContent:'center'}}>
              <TouchableOpacity style={styles.botaoAtivo} onPress={impostoRenda}>
              <Text style={styles.textBotaoAtivo}>Imposto de Renda</Text>
              </TouchableOpacity>
              <Text style={styles.textbotaoInativo}>Gerar DARF</Text>
            </View>
        
            <ScrollView style={{backgroundColor: colors.backgroundColor}}>
                <View style={styles.cardContainer}>
                {lista.map(item => <Card 
                tipo={item.tipo} 
                precoAtual={item.precoAtual} 
                quantidadeAcoes={item.quantidadeAcoes}
                 ticket={item.ticket}/>)}
            
                </View>
                
                
            </ScrollView>
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