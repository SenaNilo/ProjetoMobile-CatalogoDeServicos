import { View, Text, TouchableOpacity} from 'react-native';
import BotaoLoginCadastro from '../../Components/BotaoLoginCadastro/index';
import Input from '../../Components/Input/index'

import styles from './styles';

export default function Login() {
  return (
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.title}>LOGIN</Text>

          <Input placeholder="Email" aditionalStyle={styles.input} />
          <Input placeholder="Senha" aditionalStyle={styles.input} secureTextEntry />

          <BotaoLoginCadastro title="ENTRAR" onPress={() => {}} />
          
          <TouchableOpacity>
            <Text style={styles.linkText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    
  );
}

// Secure entry para nao se mostrar a senha
// Alinhei em um componente só, deixando o estilo que fizera nas adicionalStyle e adicionando o secureTextEntry como props, para funcionar no login e cadastro
// <CustomTextInput placeholder="Email" />
// <CustomTextInput placeholder="Senha" secureTextEntry />