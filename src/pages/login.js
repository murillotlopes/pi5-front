import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import colors from './colors';
import apiFinance from '../services/apiFinance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const token = AsyncStorage.getItem('token')

  const navigation = useNavigation();

  // if (token) {
  //   navigation.navigate('MeusAtivos')
  // }

  const handleLogin = () => {
    if (apiFinance.usuarioLogin({ email, senha })) {
      alert('Bem vindo')
      navigation.navigate('MeusAtivos')
    } else {
      alert('Email ou senha inválidos!')
    }
  };

  const Cadastrar = () => {
    navigation.navigate('user')
  }

  return (
    <View style={styles.container}>

      <Image
        source={require('../resources/logo.jpeg')} // ou source={{ uri: 'https://exemplo.com/imagem.jpg' }}
        style={{ width: 200, height: 200, marginBottom: 50 }}
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
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={Cadastrar}>
        <Text style={styles.buttonText}>Cadastrar Usuário</Text>
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
    borderColor: colors.borda,
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
    margin: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.botaoTexto,
    fontWeight: 'bold',
  },
});

export default Login;