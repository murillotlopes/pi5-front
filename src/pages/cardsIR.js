import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './colors';
const Card = ({ ticker, tipo, empresa, cnpj, segmento}) => {
    //const valorTotal = (quantidadeAcoes * precoAtual).toFixed(2);

  return (

    <View style={styles.card}>
      <View style={styles.linha}>
        <Text style={styles.label} width='12%'>Ticker:</Text>
        <Text style={styles.resp} width='15%'>GGBR4</Text>
        <Text style={styles.label} width='15%'>Empresa:</Text>
        <Text style={styles.resp} width='50%'>Gerdau SA</Text>
      </View>
      <View style={styles.linha}>
        <Text style={styles.label} width='12%'>CNPJ:</Text>
        <Text style={styles.resp} width='84%'>00.123.251/0001-00</Text>
      </View>
      <View style={styles.linha}>
        <Text style={styles.label} width='20%'>Dividendos</Text>
        <Text style={styles.resp} width='76%'>R$300.00</Text>
      </View>
      <View style={styles.linha}>
        <Text style={styles.label} width='20%'>JCP</Text>
        <Text style={styles.resp} width='76%'>R$15.00</Text>
      </View>
      <View style={styles.linha}>
        <Text style={styles.label} width='31%'>Quantidade</Text>
        <Text style={styles.label} width='33%'>Preço Médio</Text>
        <Text style={styles.label} width='33%'>Preço Total</Text>
      </View>
      <View style={styles.linha}>
        <Text style={styles.resp} width='31%'>100 unid.</Text>
        <Text style={styles.resp} width='31%'>R$25.50</Text>
        <Text style={styles.resp} width='30%'>R$2550.00</Text>
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
    borderColor: colors.textCard,
    justifyContent: 'flex-start'
  },
  resp: {
    fontSize: 14,
    color: colors.textCard,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    borderColor: '#222',
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