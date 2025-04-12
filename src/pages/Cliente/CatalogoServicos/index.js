import { View, Text, FlatList } from 'react-native';
import { useState } from 'react';

import PickerFiltro from '../../../Components/Picker/index';
import Servico from '../../../Components/Servico/index';
import styles from './styles';

function CatalogoServicos() {
  const initial_catalog = [
    { id: 1, titulo: 'Página web - HTML, CSS, JS', descricao: 'Criação de páginas web modernas, responsivas e personalizadas utilizando as tecnologias fundamentais da web: HTML, CSS e JavaScript.', preco: 1499.99, telefone: '(13) 99458162', categoria: 'Desenvolvimento' },
    { id: 2, titulo: 'Manutenção de Servidores', descricao: 'Serviço completo de diagnóstico, correções e otimização de servidores locais e em nuvem.', preco: 899.90, telefone: '(13) 988774411', categoria: 'Infraestrutura' },
    { id: 3, titulo: 'Desenvolvimento de API RESTful', descricao: 'Criação de APIs seguras e escaláveis em Node.js ou Java para integrar sistemas e plataformas.', preco: 1299.00, telefone: '(13) 997004562', categoria: 'Desenvolvimento' },
    { id: 4, titulo: 'Consultoria em Segurança da Informação', descricao: 'Análise de vulnerabilidades, auditoria de sistemas e implementação de boas práticas de segurança.', preco: 1899.50, telefone: '(13) 991223344', categoria: 'Segurança' },
    { id: 5, titulo: 'Criação de Loja Virtual (E-commerce)', descricao: 'Desenvolvimento de e-commerce com painel administrativo, carrinho e meios de pagamento integrados.', preco: 2499.99, telefone: '(13) 996785432', categoria: 'Desenvolvimento' },
    { id: 6, titulo: 'Suporte Técnico Remoto', descricao: 'Atendimento remoto para resolução de problemas técnicos em computadores e redes.', preco: 199.90, telefone: '(13) 995542187', categoria: 'Suporte' },
  ];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  const catalogFiltrado = categoriaSelecionada === 'Todos'
    ? initial_catalog
    : initial_catalog.filter(item => item.categoria === categoriaSelecionada);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Serviços disponíveis</Text>

      <PickerFiltro
        selectedValue={categoriaSelecionada}
        onValueChange={(itemValue) => setCategoriaSelecionada(itemValue)}
      />

      <FlatList
        data={catalogFiltrado}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Servico data={item} botaoTexto="Contratar" />}
      />
    </View>
  );
}

export default CatalogoServicos;
