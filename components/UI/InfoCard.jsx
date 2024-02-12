import {Image, Text, View} from 'react-native';
import styles from '../../styles/UI/InfoCard.style';
import colors from '../../constants/colors';

function InfoCard({valueLeft, valueRight, icon, style}) {
  let right;
  const isText = typeof valueRight === 'string';
  if (isText) {
    right = (
      <Text style={{fontFamily: 'Roboto', fontSize: 12, color: colors.gray}}>
        {valueRight}
      </Text>
    );
  } else {
    right = valueRight;
  }
  return (
    <View style={[styles.root, style]}>
      <View style={styles.keyView}>
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.keyContainer}>
          <Text style={styles.keyText}>{valueLeft}</Text>
        </View>
      </View>
      <View style={styles.valueView}>{right}</View>
    </View>
  );
}

export default InfoCard;
