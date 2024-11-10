import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Cabecalho } from '../Cabecalho';
import { Rodape } from '../Rodape';

export function Cadastro( ) {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Text style={styles.title}>
        Cadastre-se em nossa plataforma e venha fazer parte da OnTime!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastroCliente')}
      >
        <Text style={styles.buttonText}>Sou um Cliente</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastroEstabelecimento')}
      >
        <Text style={styles.buttonText}>Sou um Estabelecimento</Text>
      </TouchableOpacity>
      <Rodape navigation={navigation} />
    </View>
  );
}
export default Cadastro;