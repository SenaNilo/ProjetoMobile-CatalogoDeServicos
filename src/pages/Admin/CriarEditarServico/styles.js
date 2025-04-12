import { StyleSheet } from 'react-native'

const styles = new StyleSheet.create({
  desc:{
    height: 70,
  },
  container:{
    minHeight: '90vh',
    backgroundColor: '#f1f1f1',
  },
  servico:{
    backgroundColor: '#004173',
    margin: 20,
    padding: 30,
    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 5,
  },
  h1:{
    color: '#fff',
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 20,
    textAlign: "center",
  }, 
  textWhite:{
    color: '#fff',
    borderColor: "#fff"
  },
  slider: {
  width: '100%',
  height: 40,
  marginBottom: 20,
},
sliderLabel: {
  fontSize: 16,
  marginBottom: 10,
}
})

export default styles