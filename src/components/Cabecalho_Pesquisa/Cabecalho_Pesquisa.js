import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles'; 
import { Cabecalho } from '../Cabecalho';
import { Rodape } from '../Rodape';

export function Cabecalho_Pesquisa({ navigation }) {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise por um estabelecimento ou produto..."
          placeholderTextColor="#888"
        />
      </View>
      <View style={{ flex: 3 }} /> 
      <Rodape navigation={navigation} />
    </View>
  );
}
