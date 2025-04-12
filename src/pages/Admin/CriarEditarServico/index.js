import { ScrollView, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

import styles from './styles';
import InputGroup from '../../../Components/InputGroup/index';
import Button from '../../../Components/Button/index';

function CriarEditarServico() {
  const funcaoLocal = () => {};
  const [titulo, setTitulo] = useState();
  const [descricao, setDescricao] = useState();
  const [preco, setPreco] = useState(0); // Começa em 0
  const [telefone, setTelefone] = useState();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.servico}>
        <Text style={styles.h1}>Criar Novo Serviço</Text>

        <InputGroup
          text="Título do serviço:"
          textStyle={styles.textWhite}
          placeholder="Titulo"
          value={titulo}
          getValue={(e) => setTitulo(e)}
          style={styles.textWhite}
        />

        <Text style={[styles.textWhite, styles.sliderLabel]}>
          Preço: R$ {preco.toFixed(2)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={5000}
          step={10}
          value={preco}
          onValueChange={(value) => setPreco(value)}
          minimumTrackTintColor="#00ff88"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#fff"
        />

        <InputGroup
          text="Descricao:"
          textStyle={styles.textWhite}
          placeholder="Descrição do tipo de serviço oferecido"
          value={descricao}
          getValue={(e) => setDescricao(e)}
          style={[styles.desc, styles.textWhite]}
        />

        <InputGroup
          text="Contato:"
          textStyle={styles.textWhite}
          placeholder="(xx) xxxxx-xxxx"
          value={telefone}
          getValue={(e) => setTelefone(e)}
          style={styles.textWhite}
        />

        <Button text="Salvar" onPress={funcaoLocal} />
      </View>
    </ScrollView>
  );
}

export default CriarEditarServico;
