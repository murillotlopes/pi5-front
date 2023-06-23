import React, { Component, useState } from 'react';
import api from '../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from './cardsTickets';
import {ScrollView,View,Text,List,Form,SubmitButton} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';




export default function MeusAtivos() {

         return (
            <ScrollView style={{backgroundColor: '#222'}}>
                <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                <Card 
                    tipo='Ações'
                    precoAtual={25.50}
                    quantidadeAcoes={200}
                    ticket={'GGBR4'}
                    />
                 <Card 
                    tipo='FII'
                    precoAtual={162.50}
                    quantidadeAcoes={25}
                    ticket={'HGLG11'}
                    />
                <Card 
                    tipo='Ações'
                    precoAtual={37.25}
                    quantidadeAcoes={200}
                    ticket={'WEGE3'}
                    />
                </View>
                
                <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                <Card 
                    tipo='Ações'
                    precoAtual={15.99}
                    quantidadeAcoes={300}
                    ticket={'ABEV3'}
                    />
                 <Card 
                    tipo='FII'
                    precoAtual={109.45}
                    quantidadeAcoes={252}
                    ticket={'XPLG11'}
                    />
                <Card 
                    tipo='Ações'
                    precoAtual={37.25}
                    quantidadeAcoes={200}
                    ticket={'WEGE3'}
                    />
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                <Card 
                    tipo='FII'
                    precoAtual={10.81}
                    quantidadeAcoes={1500}
                    ticket={'MXRF11'}
                    />
                </View>
            </ScrollView>
         );
    }


