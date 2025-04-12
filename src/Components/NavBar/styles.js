import { StyleSheet } from 'react-native'

const styles = new StyleSheet.create({
  container:{
    minHeight: '10vh',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#7cdaf9'
  },
  image:{
    width: 30,
    height: 27,
  },
  user:{
    height: 30,
    width: 25
  }
}
)

export default styles