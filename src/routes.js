import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './pages/colors';
import Login from './pages/login';
import MeusAtivos from './pages/meusAtivos';
import User from './pages/user';
import ComprarTitulo from './pages/compraTitulo';
import VenderTitulo from './pages/vendaTitulo';
import CadastrarTitulo from './pages/cadastroTitulo';
import RelatorioIR from './pages/impostoRenda';
import CadastroRendimento from './pages/cadastroRendimento';
import RelatorioDarf from './pages/gerarDarf';

const Stack = createStackNavigator();

// Modelo de configuração da barra superior

export default function Routes() {
  
  const screenOptions = {
    headerTintColor: '#000000',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#80ed99',
    },
    headerTitleStyle: {
      color: '#000',
      fontWeight: 'bold',
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="login" component={Login} options={{
          ...screenOptions,
          title: 'LOGIN',
        }} />

      <Stack.Screen name="MeusAtivos" component={MeusAtivos} options={{
          ...screenOptions,
          title: 'Meus Ativos'
        }} />

    <Stack.Screen name="user" component={User} options={{
          ...screenOptions,
          title: 'Cadastrar Usuário',
        }} />

      <Stack.Screen name="comprartitulo" component={ComprarTitulo} options={{
          ...screenOptions,
          title: 'Comprar Título',
      }} />   
        
        <Stack.Screen name="vendertitulo" component={VenderTitulo} options={{
          ...screenOptions,
          title: 'Vender Título',
        }} />

        <Stack.Screen name="cadastrartitulo" component={CadastrarTitulo} options={{
          ...screenOptions,
          title: 'Cadastrar Título',
        }} />

        <Stack.Screen name="impostoRenda" component={RelatorioIR} options={{
          ...screenOptions,
          title: 'Relatório IR',
        }} />

        <Stack.Screen name="cadastroRendimento" component={CadastroRendimento} options={{
          ...screenOptions,
          title: 'Cadastro de Rendimentos',
        }} />

        <Stack.Screen name="relatorioDarf" component={RelatorioDarf} options={{
          ...screenOptions,
          title: 'Gerar DARF',
        }} />

       </Stack.Navigator>
    </NavigationContainer>
  );
}