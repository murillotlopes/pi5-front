import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ tipo, quantidadeAcoes, ticket, precoAtual }) => {
    const valorTotal = (quantidadeAcoes * precoAtual).toFixed(2);

  return (

    <View style={styles.card}>
      <Text style={styles.data}>{tipo}</Text>
      <Text style={styles.data}>{ticket}</Text>

      <Text style={styles.preco}>R$ {precoAtual}</Text>

      <Text style={styles.data}>{quantidadeAcoes} unid.</Text>
      <Text style={styles.total}>R$ {valorTotal}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 4,
    margin: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width:120
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  data: {
    color:'#fff',
    fontSize: 14,
    marginBottom: 2,
  },
  total: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 2,

  },
  preco: {
    color: '#fff',
    fontSize: 14,
    marginBotton: 2,
  }
});

export default Card;