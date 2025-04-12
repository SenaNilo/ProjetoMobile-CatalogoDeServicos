import { StyleSheet } from 'react-native'

const styles = new StyleSheet.create({
  servico:{
    backgroundColor: '#004173',
    margin: 20,
    padding: 30,
    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 5,
  },
  h1:{
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 20,
    textAlign: "center",
  }, 
  pesquisarCriar:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text:{
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 600,
    fontSize: 15
  },
  textWhite:{
    color: '#fff',
    borderColor: "#fff"
  },
  boldLabel: {
  fontWeight: 'bold',
},
})

export default styles