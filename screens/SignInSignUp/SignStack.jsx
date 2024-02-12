import {useEffect} from 'react';
import {Image, StatusBar, Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './LandingScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import screens from '../../constants/screens';
import CustomBackButton from '../../components/UI/CustomBackButton';
import ForgotPasswordScreen from './ForgotPasswordScreen';

const NativeStack = createNativeStackNavigator();

function SignStack() {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <NativeStack.Navigator
      initialRouteName={screens.landingScreen}
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => <CustomBackButton />,
      }}>
      <NativeStack.Screen
        name={screens.landingScreen}
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <NativeStack.Screen
        name={screens.signInScreen}
        component={SignInScreen}
      />
      <NativeStack.Screen
        name={screens.signUpScreen}
        component={SignUpScreen}
      />
      <NativeStack.Screen
        name={screens.forgotPasswordScreen}
        component={ForgotPasswordScreen}
      />
    </NativeStack.Navigator>
  );
}

export default SignStack;
