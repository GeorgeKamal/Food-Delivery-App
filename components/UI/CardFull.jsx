import {Image, Text, View} from 'react-native';
import styles from '../../styles/UI/CardFull.style';

function CardFull({name, image, color}) {
  return (
    <View style={styles.root}>
      <View style={styles.cardView(color)}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Image style={styles.image} resizeMode='contain' source={image}/>
      </View>
    </View>
  );
}

export default CardFull;
