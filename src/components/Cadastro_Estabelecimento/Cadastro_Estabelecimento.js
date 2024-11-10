import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';
import { Cabecalho } from '../Cabecalho';
import { Rodape } from '../Rodape';

function Cadastro_Estabelecimento({ navigation }) {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Text style={styles.title}>Cadastro de Estabelecimento</Text>
      <TextInput placeholder="Nome do Estabelecimento" style={styles.input} />
      <TextInput placeholder="CNPJ" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Telefone" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="CEP" style={styles.input} />
      <TextInput placeholder="Estado" style={styles.input} />
      <TextInput placeholder="Cidade" style={styles.input} />
      <TextInput placeholder="Endereço" style={styles.input} />
      <Button title="Selecionar arquivo para upload" onPress={() => {}} />
      <Button title="Cadastrar" color="#f4511e" onPress={() => {}} />
      <Rodape navigation={navigation} />
    </View>
  );
}

export default Cadastro_Estabelecimento;
