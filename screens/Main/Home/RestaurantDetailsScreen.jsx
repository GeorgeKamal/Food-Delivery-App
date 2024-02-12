import {FlatList, Image, Text, View} from 'react-native';
import restaurants from '../../../constants/restaurants';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useLayoutEffect} from 'react';
import styles from '../../../styles/Main/Home/RestaurantDetailsScreen.style';
import RestaurantCard from '../../../components/UI/RestaurantCard';
import RestaurantsList from './RestaurantsList';
import CustomButton from '../../../components/UI/CustomButton';
import Card from '../../../components/UI/Card';
import CardFull from '../../../components/UI/CardFull';
import Stars from '../../../components/UI/Stars';
import InfoCard from '../../../components/UI/InfoCard';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../constants/colors';
import screens from '../../../constants/screens';

function RestaurantDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {restaurant} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: restaurant.name});
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: restaurant.image}}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <InfoCard
          valueLeft="Location"
          valueRight={restaurant.location}
          icon={
            <FontAwesome6 name="location-dot" size={14} color={colors.gray} />
          }
        />
        <View style={styles.line} />
        <InfoCard
          valueLeft="Serves"
          valueRight={restaurant.serves}
          icon={
            <MaterialIcons
              name="restaurant-menu"
              size={14}
              color={colors.gray}
            />
          }
        />
        <View style={styles.line} />
        <InfoCard
          valueLeft="Rating"
          valueRight={<Stars rating={restaurant.rating} />}
          icon={
            <MaterialIcons
              name="restaurant-menu"
              size={14}
              color={colors.gray}
            />
          }
        />
        <View style={styles.line} />
        <InfoCard
          valueLeft="Time"
          valueRight={`${restaurant.time} min`}
          icon={
            <MaterialIcons
              name="restaurant-menu"
              size={14}
              color={colors.gray}
            />
          }
        />
        <View style={styles.line} />
        <InfoCard
          valueLeft="Distance"
          valueRight={`${restaurant.distance} km`}
          icon={
            <MaterialIcons
              name="restaurant-menu"
              size={14}
              color={colors.gray}
            />
          }
        />
        <View style={styles.line} />
        <View>
          <View style={styles.aboutView}>
            <MaterialIcons name="menu-book" size={14} color={colors.gray} />
            <Text style={styles.aboutKey}>About</Text>
          </View>
          <Text style={styles.aboutValue}>{restaurant.about}</Text>
        </View>
      </View>
      <CustomButton
        style={styles.button}
        primary
        onPress={() => {
          navigation.navigate(screens.restaurantMenuScreen, {
            title: restaurant.name,
            restaurantMenu: restaurant.menu,
          });
        }}>
        View Menu
      </CustomButton>
    </View>
  );
}

export default RestaurantDetailsScreen;
