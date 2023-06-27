import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import colors from './colors'
import apiFinance from '../services/apiFinance';

const User = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

  const navigation = useNavigation();

  const handleUser = () => {
    if (nome === '' || email === '' || senha === '' || confirmacaoSenha === '') {
      alert('Preencha todos os dados para cadastro!')
    } else if (senha !== confirmacaoSenha) {
      alert('Senhas não conferem!')
    } else {
      if (apiFinance.usuarioCriar({ nome, email, senha })) {
        alert('Usuário Cadastrado com sucesso!')
        navigation.navigate('login')
      }
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
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry={true}
        value={confirmacaoSenha}
        onChangeText={setConfirmacaoSenha}
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
    borderColor: colors.bordaTextInput,
    backgroundColor: colors.fundoTextInput,
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