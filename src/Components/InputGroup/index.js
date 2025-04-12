import { ScrollView, View, Text, TextInput, Switch, Pressable } from 'react-native'
import { useState } from 'react'

import styles from './styles'

import Input from '../Input/index'

function InputGroup(props){

  return(
    <View>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      <Input 
        placeholder={props.placeholder} 
        keyType={props.keyType} 
        value={props.value} 
        getValue={props.getValue} 
        aditionalStyle={props.style}
      />
    </View>
  )
}

export default InputGroup