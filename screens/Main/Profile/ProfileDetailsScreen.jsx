import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../../styles/Main/Profile/ProfileDetailsScreen.style';
import CustomButton from '../../../components/UI/CustomButton';
import {useContext, useLayoutEffect, useMemo} from 'react';
import AuthContext from '../../../store/auth-context';
import colors from '../../../constants/colors';
import CustomBackButton from '../../../components/UI/CustomBackButton';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/core';
import screens from '../../../constants/screens';

function ProfileDetailsScreen() {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({headerTitle: screens.profileDetailsScreen});
  }, []);

  return (
    <View style={styles.root}>
      <Text style={{color: 'red'}}>username</Text>
      <Text style={{color: 'red'}}>email</Text>
      <Text style={{color: 'red'}}>number</Text>
      <Text style={{color: 'red'}}>photo</Text>
    </View>
  );
}

export default ProfileDetailsScreen;
