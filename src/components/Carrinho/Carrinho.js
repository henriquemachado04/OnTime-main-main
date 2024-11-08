import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export function Carrinho() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/carrinho.png')} style={styles.carrinho} />
    </View>
  );
}