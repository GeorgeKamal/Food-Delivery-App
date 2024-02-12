import {useCallback, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import categories from '../../../constants/categories';
import menu from '../../../constants/menu';
import Card from '../../../components/UI/Card';
import colors from '../../../constants/colors';
import styles from '../../../styles/Main/Home/HomeScreenMenuSection.style';
import {useNavigation} from '@react-navigation/core';
import screens from '../../../constants/screens';

function HomeScreenMenuSection() {
  const navigation = useNavigation();
  const [currentCategory, setCurrentCategory] = useState(categories[0].name);

  const renderCategories = useCallback(
    dataItem => {
      const isActive = currentCategory === dataItem.item.name;
      return (
        <TouchableOpacity
          onPress={setCurrentCategory.bind(null, dataItem.item.name)}>
          <View style={styles.iconContainer(isActive)}>
            <View style={styles.categoryIcon}>
              {dataItem.item.icon(isActive)}
            </View>
          </View>
          <Text style={styles.categoryName}>{dataItem.item.name}</Text>
        </TouchableOpacity>
      );
    },
    [currentCategory],
  );

  const renderMenu = useCallback(
    dataItem => (
      <View
        style={styles.doubleCardView(
          dataItem.index < menu[currentCategory].length - 1,
        )}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(screens.restaurantScreen, {
              title: `Serving ${dataItem.item[0].name}`,
              query: dataItem.item[0].name,
            });
          }}>
          <Card
            {...dataItem.item[0]}
            color={dataItem.index % 2 === 0 ? colors.cyan : colors.pink}
          />
        </TouchableOpacity>
        {dataItem.item.length > 1 && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(screens.restaurantScreen, {
                title: `Serving ${dataItem.item[1].name}`,
                query: dataItem.item[1].name,
              });
            }}>
            <Card
              {...dataItem.item[1]}
              color={dataItem.index % 2 === 1 ? colors.cyan : colors.pink}
            />
          </TouchableOpacity>
        )}
      </View>
    ),
    [currentCategory, navigation],
  );

  return (
    <>
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategories}
          keyExtractor={categoryItem => categoryItem.name}
          horizontal
        />
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menuHeader}>
          <Text style={styles.title}>{currentCategory} Menu</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(screens.menuScreen, {currentCategory});
            }}>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listView}>
          <FlatList
            data={menu[currentCategory]}
            renderItem={renderMenu}
            keyExtractor={(menuItem, index) => index}
            horizontal
          />
        </View>
      </View>
    </>
  );
}

export default HomeScreenMenuSection;
