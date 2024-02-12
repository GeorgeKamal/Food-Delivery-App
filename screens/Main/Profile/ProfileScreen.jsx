import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../../styles/Main/Profile/ProfileScreen.style';
import CustomButton from '../../../components/UI/CustomButton';
import {useContext, useMemo} from 'react';
import AuthContext from '../../../store/auth-context';
import colors from '../../../constants/colors';
import CustomBackButton from '../../../components/UI/CustomBackButton';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/core';
import screens from '../../../constants/screens';

function ProfileScreen() {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();

  const navigationHandler = screenName => {
    navigation.navigate(screenName);
  };

  const imagePickerHandler = async () => {
    const result = await launchImageLibrary();
    authContext.updateUserImage(result.assets[0].uri);
  };

  return (
    <View style={styles.root}>
      <View style={styles.briefInfoContainer}>
        <TouchableOpacity
          onPress={imagePickerHandler}
          style={styles.imageContainer}>
          <Image
            source={{width: 150, height: 150, uri: authContext.userImage}}
          />
        </TouchableOpacity>
        <View style={styles.briefInfoText}>
          <Text style={styles.username}>Itoh</Text>
          <Text style={styles.number}>+1 11229382748</Text>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={navigationHandler.bind(null, screens.profileDetailsScreen)}>
          <Text style={styles.listItemText}>My Profile</Text>
          <CustomBackButton
            onPress={navigationHandler.bind(null, screens.profileDetailsScreen)}
            invert
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={null}>
          <Text style={styles.listItemText}>Change Password</Text>
          <CustomBackButton onPress={{}} invert />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={null}>
          <Text style={styles.listItemText}>Payment Settings</Text>
          <CustomBackButton onPress={{}} invert />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={null}>
          <Text style={styles.listItemText}>My Voucher</Text>
          <CustomBackButton onPress={{}} invert />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={null}>
          <Text style={styles.listItemText}>Notifications</Text>
          <CustomBackButton onPress={{}} invert />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={null}>
          <Text style={styles.listItemText}>About Us</Text>
          <CustomBackButton onPress={{}} invert />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={null}>
          <Text style={styles.listItemText}>Contact Us</Text>
          <CustomBackButton onPress={{}} invert />
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <CustomButton onPress={authContext.signOut}>Sign Out</CustomButton>
      </View>
    </View>
  );
}

export default ProfileScreen;
