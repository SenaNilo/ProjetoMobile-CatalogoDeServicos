import { FlatList, View, Text, Pressable, TextInput } from 'react-native'
import { useState } from 'react'

import Input from '../../../Components/Input/index'
import Button from '../../../Components/Button/index'
import Servico from '../../../Components/Servico/index'
import styles from './styles'


function Servicos(){
  let initial_catalog = [
        {id: 1, titulo: 'Página web - HTML, CSS, JS', descricao: 'Criação de páginas web modernas, responsivas e personalizadas utilizando as tecnologias fundamentais da web: HTML, CSS e JavaScript.', preco: 1499.99, telefone: '(13) 99458162'},
        {id: 2, titulo: 'Manutenção de Servidores', descricao: 'Serviço completo de diagnóstico, correções e otimização de servidores locais e em nuvem.', preco: 899.90, telefone: '(13) 988774411'},
        {id: 3, titulo: 'Desenvolvimento de API RESTful', descricao: 'Criação de APIs seguras e escaláveis em Node.js ou Java para integrar sistemas e plataformas.', preco: 1299.00, telefone: '(13) 997004562'},
        {id: 4, titulo: 'Consultoria em Segurança da Informação', descricao: 'Análise de vulnerabilidades, auditoria de sistemas e implementação de boas práticas de segurança.', preco: 1899.50, telefone: '(13) 991223344'},
        {id: 5, titulo: 'Criação de Loja Virtual (E-commerce)', descricao: 'Desenvolvimento de e-commerce com painel administrativo, carrinho e meios de pagamento integrados.', preco: 2499.99, telefone: '(13) 996785432'},
        {id: 6, titulo: 'Suporte Técnico Remoto', descricao: 'Atendimento remoto para resolução de problemas técnicos em computadores e redes.', preco: 199.90, telefone: '(13) 995542187'},
      ]

  const [catalog, setCatalog] = useState(initial_catalog)

  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Meus Serviços</Text>

      <View style={styles.pesquisarCriar}>
        <Input placeholder="Pesquisar" aditionalStyle={styles.resetWidth} />
        <Button text="Novo Serviço" aditionalStyle={styles.resetWidth} />
      </View>

      <FlatList
        data={catalog}
        keyExtractor={(item) => item.id }
        renderItem={ ({item}) => <Servico data={item} /> }
      />
      
    </View>
  )
}

export default Servicos