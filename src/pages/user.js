import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import colors from './colors'

const User = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  


  const navigation = useNavigation();

  const handleUser = () => {
    if(nome === ''){
        alert('Insira nome!')
    } else {
        //Rotina de gravação de dados e retorno a pagina principal
        alert('Usuário Cadastrado com sucesso!')
        navigation.navigate('login')
    }
  };

  const Cancelar = () => {
        navigation.navigate('login')
   };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
      style={styles.input}
      placeholder="E-mail"
      value={email}
      onChangeText={setEmail}
      />      
      <TextInput
      style={styles.input}
      placeholder="Senha"
      value={senha1}
      onChangeText={setSenha1}
      />      
      <TextInput
      style={styles.input}
      placeholder="Confirmar Senha"
      value={senha2}
      onChangeText={setSenha2}
      />      
      <TouchableOpacity style={styles.button} onPress={handleUser}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={Cancelar}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    backgroundColor: colors.textFundo,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  button: {
    backgroundColor: colors.botaoPrincipal,
    borderRadius: 5,
    padding: 15,
    margin: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.botaoTexto,
    fontWeight: 'bold',
  },
});

export default User;