import {View} from 'react-native';
import styles from '../../styles/UI/Stars.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';

function Stars({rating}) {
  let stars = [];

  for (i = 0; i < Math.floor(rating); i++)
    stars.push(
      <View key={i} style={styles.star}>
        <FontAwesome name="star" size={10} color={colors.yellow} />
      </View>,
    );

  if (rating % 1 !== 0)
    stars.push(
      <View key={Math.ceil(rating)} style={styles.star}>
        <FontAwesome name="star-half" size={10} color={colors.yellow} />
      </View>,
    );

  return <View style={styles.starContainer}>{stars}</View>;
}

export default Stars;
