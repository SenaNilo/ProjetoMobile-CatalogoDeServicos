import { View, Text, TouchableOpacity} from 'react-native';
// import CustomTextInput from '../../';
import Input from '../../Components/Input/index'
import Button from '../../Components/Button/index';

import styles from './styles';

export default function Cadastro() {
  return (
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.title}>Cadastre-se!</Text>

          <Input placeholder="Nome:" aditionalStyle={styles.input} />
          <Input placeholder="E-mail:" aditionalStyle={styles.input} />
          <Input placeholder="Senha:" secureTextEntry aditionalStyle={styles.input} />
          <Input placeholder="Confirme sua senha:" secureTextEntry aditionalStyle={styles.input} />

          <Button text="Cadastrar" onPress={() => {}} />

          <TouchableOpacity>
            <Text style={styles.linkText}>Já tem uma conta? Faça seu Login!</Text>
          </TouchableOpacity>
        </View>
      </View>
    
  );
}