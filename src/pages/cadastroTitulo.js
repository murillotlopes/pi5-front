import React from 'react';
import { StyleSheet , Text , TextInput, View }  from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from './colors';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function CadastrarTitulo() {
    const data = [10, 11, 9, 12, 13, 15, 19, 14, 15, 9, 7, 12, 13, 17, 20]
    const contentInset = { top: 20, bottom: 20 }
    
    const navigation = useNavigation();
    
    const cadastrar = () => {
      alert('Novo Titulo Cadastrado')
      navigation.navigate('comprartitulo')
    }
    const cancelar = () => {
      navigation.navigate('comprartitulo')
    }
 


  return (
      <View style={{flex : 1 , backgroundColor:colors.background}}>
        <View style={styles.barra}/>
        <View style={{marginTop:60}}>
            <Text style={styles.label}>Ticker</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Tipo</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Empresa</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>CNPJ</Text>
            <TextInput style={styles.input} keyboardType='numeric'/>
            <Text style={styles.label}>Segmento</Text>
            <TextInput style={styles.input}/>
        </View>
        <View style={styles.espaco}/>
        <View style={{flexDirection:'row' , justifyContent:'center'} }>
            <TouchableOpacity style={styles.button} onPress={cadastrar}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={cancelar}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    label: {
      fontSize:14,
      backgroundColor: colors.background,
      color: colors.textoPrincipal,
      margin:0,
      width:'70%',
      alignSelf:'center'
    },
    input: {
      borderWidth: 1,
      borderColor: colors.borda,
      color:'#fff',
      backgroundColor: '#000',
      borderRadius: 5,
      padding: 5,
      marginVertical: 0,
      width: '70%',
      alignSelf:'center',
    },
    button: {
      backgroundColor: colors.botaoPrincipal,
      borderRadius: 5,
      padding: 15,
      margin: 5,
      marginLeft: 20,
      marginRight: 20,
      alignSelf:'center',
      whidth:'45%'
    },
    buttonText: {
      color: colors.botaoTexto,
      fontWeight: 'bold',
      alignSelf:'center',
    },
    barra:{
        alignSelf:'center',
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        borderColor:'white',
        borderWidth:1
    },
    espaco:{
        marginTop: 10,
        marginBottom: 10
    }
  });
