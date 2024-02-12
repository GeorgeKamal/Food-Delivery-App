import {FlatList, View} from 'react-native';
import restaurants from '../../../constants/restaurants';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useLayoutEffect} from 'react';
import styles from '../../../styles/Main/Home/RestaurantScreen.style';
import RestaurantCard from '../../../components/UI/RestaurantCard';
import RestaurantsList from './RestaurantsList';

function RestaurantScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {title, query} = route.params;

  let data;
  if (query) {
    data = restaurants.filter(
      restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.serves.toLowerCase().includes(query.toLowerCase()),
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: `Restaurants ${title}`});
  }, []);

  return (
    // <FlatList
    //   data={restaurants}
    //   renderItem={renderRestaurants}
    //   keyExtractor={(restaurantItem, index) => index}
    // />
    <View style={styles.root}>
      {data ? <RestaurantsList data={data} pad /> : <RestaurantsList pad />}
    </View>
  );
}

export default RestaurantScreen;
