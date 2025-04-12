import { View, Text, Image } from 'react-native'

import homeImage from '../../../assets/house-solid.svg'
import listImage from '../../../assets/list-ul-solid.svg'
import userImage from '../../../assets/user-solid.svg'
import styles from './styles'

function NavBar(){

  return(
    <View style={styles.container}>
      <Image
          source={ homeImage }
          style={styles.image}
        />
      <Image
          source={ listImage }
          style={styles.image}
        />
      <Image
          source={ userImage }
          style={[styles.image, styles.user,]}
        />
    </View>
  )
}

export default NavBar