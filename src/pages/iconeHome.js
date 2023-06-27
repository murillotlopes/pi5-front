import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconeHome = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={iconName} size={50} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
    height: 70,
    width: 70,
    padding: 0,
    margin: 0,
    // Adicione estilos adicionais conforme necessário
  },
});

export default IconeHome;
