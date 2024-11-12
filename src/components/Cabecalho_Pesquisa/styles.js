import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  logo: {
    width: 100,
    height: 50,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginTop: 20,
    width: '80%', // Largura ajustada
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center', // Centraliza o Card verticalmente
    alignItems: 'center', // Centraliza o Card horizontalmente
    width: '100%',
  },
});

export default styles;
