import {Image, Text, View} from 'react-native';
import styles from '../../styles/UI/Card.style';

function Card({name, image, color}) {
  return (
    <View style={styles.main(color)}>
      <Text style={styles.name}>{name}</Text>
      <Image style={styles.image} resizeMode='cover' source={image} />
    </View>
  );
}

export default Card;
