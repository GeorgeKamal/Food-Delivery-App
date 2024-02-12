import {FlatList, TouchableOpacity, View} from 'react-native';
import styles from '../../../styles/Main/Home/RestaurantsList.style';
import restaurants from '../../../constants/restaurants';
import RestaurantCard from '../../../components/UI/RestaurantCard';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';
import screens from '../../../constants/screens';

function RestaurantsList({data = restaurants, pad}) {
  const navigation = useNavigation();
  const renderRestaurants = useCallback(
    (pad, dataItem) => (
      <View
        style={
          pad
            ? styles.paddingFull
            : styles.padding(dataItem.index < restaurants.length - 1)
        }>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(screens.restaurantDetailsScreen, {
              restaurant: dataItem.item,
            });
          }}>
          <RestaurantCard {...dataItem.item} />
        </TouchableOpacity>
      </View>
    ),
    [navigation],
  );

  return (
    <View style={styles.view}>
      <FlatList
        data={data}
        renderItem={renderRestaurants.bind(null, pad)}
        keyExtractor={restaurantItem => restaurantItem.id}
      />
    </View>
  );
}

export default RestaurantsList;
