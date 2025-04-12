// src/pages/DetalhesServico/index.js
import { View, Text, ScrollView } from 'react-native';

import Button from '../../../Components/Button/index'
import styles from './styles';

function DetalhesServico() {

  let servico = {
    id: 1,
    titulo: 'Página web - HTML, CSS, JS',
    descricao: 'Desenvolvimento completo de páginas web com design moderno, foco em usabilidade e performance. Utilizamos HTML5, CSS3 e JavaScript para criar experiências fluidas e responsivas, adaptadas para todos os dispositivos (computador, tablet e celular). Ideal para pequenas empresas, portfólios, blogs ou landing pages.',
    preco: 1499.99,
    telefone: '(13) 99458-162',
};


  return (
    <ScrollView style={styles.container}>
<View style={styles.servico}>
  <Text style={styles.h1}>{servico.titulo}</Text>

  <Text style={styles.textWhite}>{servico.descricao}</Text>

  <Text style={styles.textWhite}>
    <Text style={{ fontWeight: 'bold' }}>Preço:</Text> R$ {servico.preco.toFixed(2)}
  </Text>

  <Text style={styles.textWhite}>
    <Text style={{ fontWeight: 'bold' }}>Contato:</Text> {servico.telefone}
  </Text>

  <Text style={styles.pagamentoTitulo}>Formas de Pagamento:</Text>
  <Text style={styles.pagamentoItem}>💳 Cartão de crédito em até 3x sem juros</Text>
  <Text style={styles.pagamentoItem}>📱 Pix com 5% de desconto</Text>
  <Text style={styles.pagamentoItem}>🏦 Transferência bancária (Itaú, Caixa e Nubank)</Text>
  <Text style={styles.pagamentoItem}>💵 Dinheiro (pagamento na entrega com recibo)</Text>

  <View style={styles.botoes}>
    <Button text="Voltar" />
    <Button text="Contratar" />
  </View>
</View>
    </ScrollView>
  );
}

export default DetalhesServico; 