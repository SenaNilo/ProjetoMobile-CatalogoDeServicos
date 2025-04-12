import { StyleSheet } from 'react-native'

const styles = new StyleSheet.create({
  desc:{
    height: 70,
  },
  container:{
    minHeight: '90vh',
    maxHeight: '90vh',
    backgroundColor: '#f1f1f1',
    paddingTop: 20
  },
  servico:{
    backgroundColor: '#004173',
    margin: 20,
    padding: 30,
    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 5,
  },
  resetWidth:{
    width: 'auto',
    marginTop: 0,
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
})

export default styles