import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo
    alignItems: 'center',
  },
  background: {
    width: 414,
    height: 896,
    justifyContent: 'flex-end', // Para alinhar o rodapé se necessário
  },
  lista: {
    paddingHorizontal: 10,
  },
});

export default estilos;
