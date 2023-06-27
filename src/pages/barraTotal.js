import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BarraTotal = ({ total, lucroPrejuizo }) => {

  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Total</Text>
        <Text style={styles.valor}>R${total}</Text>
      </View>
      <View>
        <Text style={styles.label}>Lucro/Prejuízo</Text>
        <Text style={styles.valor}>R${lucroPrejuizo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 5,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '98%'
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  valor: {
    color: '#fff',
    fontSize: 18,
  }
});

export default BarraTotal;