import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../../../constants/screens';
import CustomBackButton from '../../../components/UI/CustomBackButton';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import RestaurantScreen from './RestaurantScreen';
import colors from '../../../constants/colors';
import styles from '../../../styles/Main/Home/HomeStack.style';
import RestaurantDetailsScreen from './RestaurantDetailsScreen';
import RestaurantMenuScreen from './RestaurantMenuScreen';

const NativeStack = createNativeStackNavigator();

function HomeStack() {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <NativeStack.Navigator
      initialRouteName={screens.homeScreen}
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerLeft: () => <CustomBackButton />,
        headerTitleStyle: styles.header,
        headerTitleAlign: 'center',
        headerTransparent: true,
      }}>
      <NativeStack.Screen
        name={screens.homeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <NativeStack.Screen name={screens.menuScreen} component={MenuScreen} />
      <NativeStack.Screen
        name={screens.restaurantScreen}
        component={RestaurantScreen}
      />
      <NativeStack.Screen
        name={screens.restaurantDetailsScreen}
        component={RestaurantDetailsScreen}
      />
      <NativeStack.Screen
        name={screens.restaurantMenuScreen}
        component={RestaurantMenuScreen}
      />
    </NativeStack.Navigator>
  );
}

export default HomeStack;
