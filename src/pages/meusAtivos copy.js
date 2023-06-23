import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component, useState } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import colors from './colors';
import {Container, Form, Input, View, SubmitButton ,List } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './cardsTickets';
import { useNavigation } from '@react-navigation/native';
import {ComprarTitulo}  from './compraTitulo';



export default class MeusAtivos extends Component {
  


    state = {
        newCard: '',
        cards: [],
        loading: false,
    }

    async componentDidMount () {
        const cards = await AsyncStorage.getItem('cards');

        if(cards) {
            this.setState( {cards: JSON.parse(cards)});
        }
    }

    componentDidUpdate(_, prevState) {
        const { cards } = this.state;

        if(prevState.cards !== cards) {
            AsyncStorage.setItem('cards', JSON.stringify(cards));
        }
    }

    checkIfItemExists = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          const itemExists = value !== null;
          return itemExists;
        } catch (error) {
          console.error('Erro ao verificar a existência do item:', error);
          return false;
        }
      };

   
    handleAddCard = async () => {
      const { navigation } = this.props;
      navigation.navigate('comprartitulo');
    }


    render() {
         const { cards, newCard, loading } = this.state;

         return (
            <Container>

                <List
                    showVerticalScrollIndicator={false}
                    data={cards}
                    keyExtractor={card => (card.id)}
                    renderItem={({item}) => (
                        <Card>
                            tipo={'Ação'},
                            ticket={'GGBR4'},
                            precoAtual={27.05},
                            quantidadeAcoes={100},
                        </Card>
                    )}
                />
                <Form>
                    <SubmitButton onPress={this.handleAddCard}>
                        <Icon name='add' size={30} color='#fff'/>
                    </SubmitButton>
                </Form>

            </Container>
         );
    }
}

