import {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../../../constants/screens';
import CustomBackButton from '../../../components/UI/CustomBackButton';
import styles from '../../../styles/Main/Home/HomeStack.style';
import ProfileScreen from './ProfileScreen';
import ProfileDetailsScreen from './ProfileDetailsScreen';

const NativeStack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <NativeStack.Navigator
      initialRouteName={screens.profileScreen}
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerLeft: () => <CustomBackButton />,
        headerTitleStyle: styles.header,
        headerTitleAlign: 'center',
        headerTransparent: true,
      }}>
      <NativeStack.Screen
        name={screens.profileScreen}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <NativeStack.Screen
        name={screens.profileDetailsScreen}
        component={ProfileDetailsScreen}
      />
    </NativeStack.Navigator>
  );
}

export default ProfileStack;
