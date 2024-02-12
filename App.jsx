import {useContext, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import Intro from './components/IntroSlider/Intro';
import SignStack from './screens/SignInSignUp/SignStack';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './store/AuthProvider';
import AuthContext from './store/auth-context';
import MainNavigator from './screens/Main/MainNavigator';

function App() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }, []);

  let content;

  if (authContext.signedIn) {
    content = (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );
  } else {
    if (authContext.firstLoad) {
      content = <Intro onDone={authContext.proceed} />;
    } else {
      content = (
        <NavigationContainer>
          <SignStack />
        </NavigationContainer>
      );
    }
  }

  return content;
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
