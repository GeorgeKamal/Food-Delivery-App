import {FlatList, TouchableOpacity, View} from 'react-native';
import menu from '../../../constants/menu';
import CardFull from '../../../components/UI/CardFull';
import colors from '../../../constants/colors';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useCallback, useLayoutEffect} from 'react';
import styles from '../../../styles/Main/Home/MenuScreen.style';
import screens from '../../../constants/screens';

function MenuScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {currentCategory} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: `${currentCategory} Menu`});
  }, []);

  const renderMenu = useCallback(
    dataItem => (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(screens.restaurantScreen, {
              title: `Serving ${dataItem.item.name}`,
              query: dataItem.item.name,
            });
          }}>
          <CardFull
            {...dataItem.item}
            color={dataItem.index % 2 === 0 ? colors.cyan : colors.pink}
          />
        </TouchableOpacity>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.root}>
      <FlatList
        data={menu[currentCategory].flat()}
        renderItem={renderMenu}
        keyExtractor={menuItem => menuItem.name}
      />
    </View>
  );
}

export default MenuScreen;
