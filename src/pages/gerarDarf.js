import React from 'react';
import { StyleSheet , Text , View }  from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CompraTitulo() 
{

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('login')
  }

  return (
  <View style={styles.container}>
      <Text>Gerar DARF</Text>

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
