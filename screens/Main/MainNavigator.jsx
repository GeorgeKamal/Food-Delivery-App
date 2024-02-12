import {useEffect} from 'react';
import {Image, StatusBar, Text, TouchableOpacity} from 'react-native';
import CustomBackButton from '../../components/UI/CustomBackButton';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from '../../constants/screens';
import HomeScreen from './Home/HomeScreen';
import colors from '../../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeStack from './Home/HomeStack';
import OrderScreen from './Order/OrderScreen';
import ListScreen from './List/ListScreen';
import ProfileScreen from './Profile/ProfileScreen';
import ProfileStack from './Profile/ProfileStack';

const Tab = createBottomTabNavigator();

function MainNavigator() {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <Tab.Navigator
      initialRouteName={screens.homeScreen}
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => <CustomBackButton />,
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grayDark,
        tabBarStyle: {height: '10%'},
        tabBarLabelStyle: {
          fontFamily: 'Poppins',
          fontSize: 12,
        },
        tabBarItemStyle: {
          position: 'relative',
          margin: '5%',
        },
      }}>
      <Tab.Screen
        name={screens.homeStack}
        component={HomeStack}
        options={{
          tabBarIcon: props => <Entypo {...props} name="shop" size={20} />,
          title: screens.homeScreen,
        }}
      />
      <Tab.Screen
        name={screens.orderScreen}
        component={OrderScreen}
        options={{
          headerShown: true,
          headerTitle: 'Your Order',
          headerTitleStyle: {
            fontFamily: 'Poppins',
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.black,
          },
          headerTitleAlign: 'center',
          headerLeft: undefined,
          tabBarIcon: props => (
            <FontAwesome5 {...props} name="clipboard-list" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={screens.listScreen}
        component={ListScreen}
        options={{
          tabBarIcon: props => (
            <Fontisto {...props} name="favorite" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={screens.profileStack}
        component={ProfileStack}
        options={{
          tabBarIcon: props => (
            <FontAwesome5 {...props} name="user-alt" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
