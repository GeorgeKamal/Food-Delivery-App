import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/UI/RestaurantCard.style';
import colors from '../../constants/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import Stars from './Stars';

function RestaurantCard({distance, image, location, name, rating, time, unit}) {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.locationContainer}>
          <FontAwesome6 name="location-dot" size={12} color={colors.gray} />
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.distanceTimeContainer}>
          <Feather name="clock" size={12} color={colors.gray} />
          <Text style={styles.distanceTime}>
            {time} min - {distance} km
          </Text>
        </View>
        <Stars rating={rating} />
      </View>
    </View>
  );
}

export default RestaurantCard;
