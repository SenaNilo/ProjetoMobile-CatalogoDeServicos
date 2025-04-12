import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

function PickerFiltro({ selectedValue, onValueChange }) {
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
      >
        <Picker.Item label="Todos" value="Todos" />
        <Picker.Item label="Desenvolvimento" value="Desenvolvimento" />
        <Picker.Item label="Infraestrutura" value="Infraestrutura" />
        <Picker.Item label="Segurança" value="Segurança" />
        <Picker.Item label="Suporte" value="Suporte" />
      </Picker>
    </View>
  );
}

export default PickerFiltro;
