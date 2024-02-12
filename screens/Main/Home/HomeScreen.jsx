import {
  Alert,
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../../../styles/Main/Home/HomeScreen.style';
import colors from '../../../constants/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomeScreenMenuSection from './HomeScreenMenuSection';
import RestaurantsList from './RestaurantsList';
import {useNavigation} from '@react-navigation/core';
import screens from '../../../constants/screens';
import {useEffect, useState} from 'react';
import SearchResults from '../../../components/UI/SearchResults';
import GetLocation from 'react-native-get-location';
import {getCurrentLocationName} from '../../../utils/Utilities';

function HomeScreen() {
  const navigation = useNavigation();
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState('Choose Location');

  const searchHandler = text => {
    setSearchText(text);
  };

  const locationHandler = async () => {
    try {
      let locationResult = await getCurrentLocationName();
      setLocation(locationResult);
    } catch (error) {
      Alert.alert(
        'Location Error',
        `An error occured while fetching your location. Please try again!\r\nError Message : ${
          error.message ? error.message : error
        }`,
      );
    }
  };

  useEffect(() => {
    navigation.getParent()?.addListener('tabPress', () => {
      setSearching(false);
    });
  }, [navigation]);

  let content = (
    <>
      <View style={styles.topContainer(searching)}>
        <View style={styles.searchView(searching)}>
          <Fontisto name="search" size={20} color={colors.grayDark} />
          <TextInput
            style={styles.searchText}
            placeholder="Search"
            placeholderTextColor={colors.grayDark}
            onChangeText={searchHandler}
            onFocus={setSearching.bind(null, true)}
            autoFocus={searching}
          />
          {searching && (
            <TouchableOpacity
              style={styles.searchClose}
              onPress={setSearching.bind(null, false)}>
              <Fontisto name="close-a" size={12} color={colors.grayDark} />
            </TouchableOpacity>
          )}
        </View>
        {searching && <SearchResults query={searchText} />}
        {!searching && (
          <View style={styles.locationView}>
            <TouchableOpacity
              style={styles.locationTouchable}
              onPress={locationHandler}>
              <FontAwesome6
                name="location-dot"
                size={20}
                color={colors.black}
              />
              <Text style={styles.locationText}>{location}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {!searching && (
        <>
          <HomeScreenMenuSection />
          <View style={styles.nearMeSection}>
            <View style={styles.nearMeContainer}>
              <Text style={styles.nearMeText}>Near Me</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(screens.restaurantScreen, {
                    title: 'Near Me',
                  });
                }}>
                <Text style={styles.viewAll}>View all</Text>
              </TouchableOpacity>
            </View>
            <RestaurantsList />
          </View>
        </>
      )}
    </>
  );

  if (searching) {
    content = (
      <Pressable style={styles.main} onPress={Keyboard.dismiss}>
        {content}
      </Pressable>
    );
  }

  return <View style={styles.root}>{content}</View>;
}

export default HomeScreen;
