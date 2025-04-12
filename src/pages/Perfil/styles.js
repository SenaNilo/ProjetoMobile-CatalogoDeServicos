import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '90vh',
    maxHeight: '90vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box:{
    width: '90%',
    backgroundColor: '#004173',
    alignItems: 'center',
    padding: 40,
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#fff',
  },
  switchBox: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginVertical: 20,
  paddingHorizontal: 20,
}
});

export default styles