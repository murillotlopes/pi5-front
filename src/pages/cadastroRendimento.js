import React from 'react';
import { StyleSheet , Text , TextInput, View }  from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from './colors';
import { useNavigation } from '@react-navigation/native';
import { BarChart, XAxis , Grid} from 'react-native-svg-charts'
import * as scale from 'd3-scale'

export default function ComprarTitulo() {
    const data = [10, 11, 9, 2, 13, 15, 19, 14, 15, 9, 7, 12, 13]

    const navigation = useNavigation();

    const cadastrar = () => {
        console.log('rendimento registrado')
    }
    const cancelar = () => {
        console.log('cancelar')
    }


  return (
    <View style={styles.container}>

    <View style={{ height: 150, padding: 20 }}>
      <BarChart
        style={{ flex: 1 }}
        data={data}
        gridMin={0}
        svg={{ fill: 'rgb(0, 120, 0)' }}
      />
      <XAxis
        style={{ marginTop: 10 }}
        data={ data }
        scale={scale.scaleBand}
        formatLabel={ (value, index) => index }
        labelStyle={ { color: 'white' } }
      />
    </View>

    <View style={{justifyContent:'flex-start'}}>
      <Text style={styles.label}>Ticker</Text>
        <TextInput style={styles.input} placeholder='ABCD4'></TextInput>
      </View>
      <View style={styles.linha}>
        <View style={{width:'40%'}}>  
          <Text style={styles.label}>Tipo</Text>
          <TextInput style={styles.input} placeholder='Dividendos'></TextInput>
        </View>
        <View style={{width:'40%'}}>
          <Text style={styles.label}>Data Pag.</Text>
          <TextInput style={styles.input} keyboardType='numeric'></TextInput>
        </View>    
      </View>
      <View style={styles.linha}>
        <View style={{width:'40%'}}>  
          <Text style={styles.label}>Quantidade</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={{width:'40%'}}>
          <Text style={styles.label}>Valor/Cota</Text>
          <TextInput style={styles.input} keyboardType='numeric'></TextInput>
        </View>    
      </View>
      <View style={styles.linha}>
        <View style={{width:'40%'}}>  
          <Text style={styles.label}>Imposto Pago</Text>
          <TextInput style={styles.input} keyboardType='numeric'></TextInput>
        </View>
        <View style={{width:'40%'}}>  
          <Text style={styles.label}>Total</Text>
          <Text style={styles.input}></Text>
        </View>
      </View>
      <View style={styles.linha}>
        <View style={{width:'100%'}}>  
          <Text style={styles.label}>Informação Adicional</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
      </View>      
      <TouchableOpacity style={styles.button} onPress={cadastrar}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

    </View>     
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    }, 

    label: {
      fontSize:14,
      backgroundColor: colors.background,
      color: colors.textoPrincipal,
      marginTop:10,
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
        borderColor: colors.borda,
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
      justifyContent: 'flex-start',
      alignSelf: 'center'
    }
  });


