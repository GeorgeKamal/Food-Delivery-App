import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import menu from '../../../constants/menu';
import CardFull from '../../../components/UI/CardFull';
import colors from '../../../constants/colors';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useCallback, useContext, useLayoutEffect} from 'react';
import styles from '../../../styles/Main/Home/RestaurantMenuScreen.style';
import screens from '../../../constants/screens';
import CustomButton from '../../../components/UI/CustomButton';
import RestaurantMenuItem from '../../../components/UI/RestaurantMenuItem';
import AuthContext from '../../../store/auth-context';

function RestaurantMenuScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {title, restaurantMenu} = route.params;
  const authContext = useContext(AuthContext);

  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: `${title} Menu`});
  }, []);

  const renderRestaurantMenu = useCallback(
    dataItem => (
      <RestaurantMenuItem
        item={dataItem.item}
        rightComponent={
          <CustomButton
            primary
            onPress={authContext.addToCart.bind(null, dataItem.item)}>
            Add Item
          </CustomButton>
        }
      />
    ),
    [authContext],
  );

  return (
    <View style={styles.root}>
      <FlatList
        data={restaurantMenu}
        renderItem={renderRestaurantMenu}
        keyExtractor={(restaurantMenuItem, index) => index}
      />
    </View>
  );
}

export default RestaurantMenuScreen;
