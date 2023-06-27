import React from 'react';
import { StyleSheet , Text , TextInput, View }  from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from './colors';
import { useNavigation } from '@react-navigation/native';

export default function ComprarTitulo() {
    const data = [30, 25, 28, 29, 27, 23, 25, 21, 19, 23, 25, 20, 18, 17, 15]
    const contentInset = { top: 20, bottom: 20 }

    const navigation = useNavigation();
    
    const cadastrar = () => {
        alert('Operação Registrada')
    }
    const cancelar = () => {
        navigation.navigate('MeusAtivos')
        console.log('cancelar')
    }
    
    const comprar = () => {
        navigation.navigate('comprartitulo')
        console.log('comprar')
    }


  return (
      <View style={{flex : 1 , backgroundColor:'black'}}>

        <View style={{flexDirection:'row' , justifyContent:'center'}}>
            <TouchableOpacity style={styles.botaoAtivo} onPress={comprar}>
                <Text style={styles.textBotaoAtivo}>Comprar</Text>
            </TouchableOpacity>
            <Text style={styles.textbotaoInativo}>Vender</Text>
        </View>

        <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={5}
                    formatLabel={(value) => `${value}`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data}
                    svg={{ stroke: 'rgb(0, 255, 255)' }}
                    contentInset={contentInset}
                >
                    <Grid />
                </LineChart>
            </View>
        <View style={styles.barra}/>
        <View>
            <Text style={styles.label}>Ticker</Text>
            <TextInput style={styles.input} placeholder='ABCD4'/>
            <Text style={styles.label}>Corretora</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Data</Text>
            <TextInput style={styles.input} placeholder='01/01/2023' keyboardType='numeric'/>
            <View style={styles.linha}>
                <View style={{width:'50%'}}>
                    <Text style={styles.label}>Preço</Text>
                    <TextInput style={styles.input} keyboardType='numeric'/>
                </View>
                <View style={{width:'50%'}}>
                    <Text style={styles.label}>Quantidade</Text>
                    <TextInput style={styles.input} keyboardType='numeric'/>
                </View>
            </View>
        </View>
        <View style={styles.espaco}/>
        <View style={{flexDirection:'row' , justifyContent:'center'} }>
            <TouchableOpacity style={styles.button} onPress={cadastrar}>
                <Text style={styles.buttonText}>Vender</Text>
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
      borderColor: colors.bordaTextInput,
      color: colors.textoInput,
      backgroundColor: colors.fundoTextInput,
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
        borderColor:colors.borda,
        borderWidth:1
    },
    espaco:{
        marginTop: 10,
        marginBottom: 10
    },
    botaoAtivo:{
        backgroundColor: colors.fundoBotaoAtivo,
        borderRadius: 5,
        margin: 10,
        padding: 5,
    },
    textBotaoAtivo:{
        color: colors.textoBotaoAtivo,
        fontSize: 20,
        margin: 0,
        padding: 0,
        borderRadius: 5,
        paddingHorizontal: 20

    },
    textbotaoInativo:{
        backgroundColor: colors.fundoBotaoInativo,
        color: colors.textoBotaoInativo,
        fontSize:20,
        margin: 10,
        padding: 5,
        borderRadius: 5,
        paddingHorizontal: 30
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
      }
  });


