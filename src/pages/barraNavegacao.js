import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const BarraNavegacao = () => {

  const navigation = useNavigation();
    
  const Inicio = () => {
      navigation.navigate('MeusAtivos')
    }
  
    const RelatorioIR = () => {
      navigation.navigate('impostoRenda')
    }

    const Operacao = () => {
      navigation.navigate('comprartitulo')
    }

    const Rendimentos = () => {
      navigation.navigate('cadastroRendimento')
    }

  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={Inicio}>
        <View>
          <Icon style={styles.icon} name='home'/>
          <Text style={styles.label}>Início</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={RelatorioIR}>
        <View>
        <Icon style={styles.icon} name='search'/>
        <Text style={styles.label}>Imposto</Text>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={Operacao}>
      <View>
        <Icon style={styles.icon} name='list'/>
        <Text style={styles.label}>Operação</Text>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={Rendimentos}>
      <View>
        <Icon style={styles.icon} name='star'/>
        <Text style={styles.label}>Rendimentos</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 5,
    margin:5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width:'98%'
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  valor: {
    color: '#fff',
    fontSize: 18,
  },

  icon: {
    fontSize: 40,
    color: '#999',
    justifyContent: 'center',
    alignSelf: 'center'
  },
});

export default BarraNavegacao;