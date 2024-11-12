import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export function Card({ navigation }) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Estabelecimento')}>
        <Image source={require('../../../assets/supermercado_centro.jpg')} style={styles.foto} />
        <Text style={styles.nome}>Supermercado Centro</Text>
      </TouchableOpacity>
    </View>
  );
}