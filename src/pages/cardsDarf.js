import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './colors';
const Card = ({ tipo, totalVenda, lucro_Prejuizo, imposto}) => {

  return (

    <View style={styles.card}>
      <Text style={styles.titulo}>{tipo}</Text>
      <View style={styles.linha}>
        <View style={{width:'30%'}}>
          <Text style={styles.label}>Total Venda</Text>
          <Text style={styles.resp}>{totalVenda}</Text>
        </View>
        <View style={{width:'30%'}}>
          <Text style={styles.label}>Lucro/Prejuízo</Text>
          <Text style={styles.resp}>{lucro_Prejuizo}</Text>
        </View>
        <View style={{width:'30%'}}>
          <Text style={styles.label}>Valor do Imposto</Text>
          <Text style={styles.resp} >{imposto}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.fundoCard,
    borderRadius: 8,
    padding: 5,
    margin: 2,
    shadowColor: '#222',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width:'98%',
    borderRadius:5,
    justifyContent: 'flex-start'
  },
  label: {
    color: '#000',
    marginLeft: 5,
    fontSize: 12,
    borderColor: colors.borda,
    justifyContent: 'flex-start'
  },
  titulo: {
    color: colors.textCard,
    marginLeft: 5,
    fontSize: 16,
    borderColor: '#fff',
    justifyContent: 'flex-start'

  },
    resp: {
    fontSize: 14,
    color: colors.textCard,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    borderColor: colors.borda,
    borderWidth: 1,
    marginLeft:5,
    marginRight: 5,
    marginBottom: 2,
    paddingLeft: 5,
    paddingRight: 5
  },
  linha: {
      flexDirection: 'row',
      justifyContent: 'flex-start',

  }
});

export default Card;