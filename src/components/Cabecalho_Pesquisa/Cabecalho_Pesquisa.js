import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles';
import { Card } from '../Card';

export function Cabecalho_Pesquisa({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/logo.jpg')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Pesquise por um produto ou estabelecimento..."
        placeholderTextColor="#888"
      />

    </View>
  );
}
<View style={styles.cardContainer}>
<Card navigation={navigation} />
</View>