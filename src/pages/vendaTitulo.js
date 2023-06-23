import React from 'react';
import { StyleSheet , Text , View }  from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function VendaTitulo() 
{

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('login')
  }

  return (
  <View style={styles.container}>
      <Text>Venda Titulo de Ativos</Text>

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
