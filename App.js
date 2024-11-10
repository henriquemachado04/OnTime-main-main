import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Rodape } from './src/components/Rodape';
import { Cabecalho } from './src/components/Cabecalho';
import { Carrinho } from './src/components/Carrinho/Carrinho';
import { Card } from './src/components/Card/Card';
import { Cabecalho_Pesquisa } from './src/components/Cabecalho_Pesquisa/Cabecalho_Pesquisa';
import styles from './src/AppStyles';
import { Cadastro } from './src/components/Cadastro/Cadastro';
import { Cadastro_Cliente } from './src/components/Cadastro_Cliente/Cadastro_Cliente';
import { Cadastro_Estabelecimento } from './src/components/Cadastro_Estabelecimento/Cadastro_Estabelecimento';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CabecalhoPesquisa" component={Cabecalho_Pesquisa} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroCliente" component={Cadastro_Cliente} />
        <Stack.Screen name="CadastroEstabelecimento" component={Cadastro_Estabelecimento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Cabecalho />
      </View>
      <View style={styles.carrinho}>
        <Carrinho />
      </View>
      <View style={styles.cards}>
        <Card style={styles.card}/>
      </View>
      <View style={styles.content}>
      </View>
      <View style={styles.footer}>
        <Rodape navigation={navigation} />
      </View>
    </View>
  ); 
}
export default App;
