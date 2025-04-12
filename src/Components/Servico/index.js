import { View, Text } from 'react-native'

import Button from '../Button/index'
import styles from './styles'

function Servico(props){
  return(
    <View style={styles.servico}>
      <Text style={[styles.h1, styles.textWhite]}> {props.data.titulo} </Text>

      <Text style={[styles.text, styles.textWhite]}>
        <Text style={styles.boldLabel}>Preço:</Text> R$ {props.data.preco.toFixed(2)}
      </Text>

      <Text style={[styles.text, styles.textWhite]}>
        <Text style={styles.boldLabel}>Descrição:</Text> {props.data.descricao}
      </Text>

      <Text style={[styles.text, styles.textWhite]}>
        <Text style={styles.boldLabel}>Contato:</Text> {props.data.telefone}
      </Text>

      <Button text={props.botaoTexto || "Editar"} />
    </View>
  )

}

export default Servico