import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import MeusAtivos from './pages/meusAtivos';
import User from './pages/user';
import ComprarTitulo from './pages/compraTitulo';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="login" component={Login} options={{
          title: 'LOGIN',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />

      <Stack.Screen name="Meus Ativos" component={MeusAtivos} options={{
          title: 'Meus Ativos',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />

    <Stack.Screen name="user" component={User} options={{
          title: 'Cadastrar Usuário',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />

    <Stack.Screen name="comprartitulo" component={ComprarTitulo} options={{
          title: 'Comprar Título',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />

       </Stack.Navigator>
    </NavigationContainer>
  );
}