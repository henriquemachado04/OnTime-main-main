import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Mude conforme a cor de fundo desejada
    paddingHorizontal: 20,
  },
  texto: {
    fontSize: 18,
    color: '#333', // Cor do texto
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: 'bold', // Ajuste para dar destaque ao texto
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Para sombra no Android
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icone: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  sou: {
    fontSize: 16,
    color: '#333', // Cor do texto
    fontWeight: '600',
  },
});

export default styles;
