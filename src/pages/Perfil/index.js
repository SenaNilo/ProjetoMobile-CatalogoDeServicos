import { View, Text, Switch } from 'react-native';
import { useState } from 'react';
import Avatar from '../../Components/Avatar/index';
import Button from '../../Components/Button/index';
import styles from './styles';

export default function Perfil() {
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Avatar />
        <Text style={styles.label}>UsuárioTeste</Text>
        <Text style={styles.label}>Usuário_Teste@gmail.com</Text>

        <View style={styles.switchBox}>
          <Text style={styles.label}>Receber notificações:</Text>
          <Switch
            value={notificacoesAtivas}
            onValueChange={setNotificacoesAtivas}
            trackColor={{ false: '#767577', true: '#00ff88' }}
            thumbColor={notificacoesAtivas ? '#fff' : '#ccc'}
          />
        </View>

        <Button text="Editar" onPress={() => {}} />
      </View>
    </View>
  );
}
