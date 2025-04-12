import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    minHeight: '90vh',
    backgroundColor: '#f1f1f1',
  },
  servico: {
    backgroundColor: '#004173',
    margin: 20,
    padding: 30,
    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 5,
  },
  h1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
    textAlign: "center",
  },
  textWhite: {
    color: '#fff',
    fontSize: 17,
    marginBottom: 15,
  },
  pagamentoTitulo: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff'
  },
  pagamentoItem: {
    color: '#fff',
    marginBottom: 5,
    marginLeft: 10,
  },
  botoes: {
    marginTop: 30,
    gap: 15,
  }
});

export default styles;
