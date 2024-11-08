import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './styles';

export function cabecalho_Pesquisa() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua pesquisa..."
        placeholderTextColor="#888" // Define a cor do placeholder
      />
    </View>
  );
}
