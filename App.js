import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Rodape } from './src/components/Rodape';
import { Cabecalho } from './src/components/Cabecalho';
import { Carrinho } from './src/components/Carrinho/Carrinho';
import { Card } from './src/components/Card/Card';
import { Cabecalho_Pesquisa } from './src/components/Cabecalho_Pesquisa/Cabecalho_Pesquisa'; // Adicione essa linha

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pesquisa" component={Cabecalho_Pesquisa} /> {Cabecalho}
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
        <Rodape />
      </View>
    </View>
  ); 
}
export default App;