import { TextInput } from 'react-native'

import styles from './styles'

function Input(props){
  return(
    <TextInput 
      placeholder={props.placeholder} 
      style={[styles.input, props.aditionalStyle]}
      onChangeText={props.getValue}
      keyboardType={props.keyType}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    />
  )
}

export default Input