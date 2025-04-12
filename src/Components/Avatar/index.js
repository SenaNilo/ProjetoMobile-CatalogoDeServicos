import { View, Image} from 'react-native';
import styles from './styles';

import avatar from '../../../assets/Avatar.png'

export default function Avatar() {
  return( 
  <>
    <View style={styles.avatar}>
    <Image
          source={ avatar }
          style={styles.image}
        />
    </View>
  </>
  )}