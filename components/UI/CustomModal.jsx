import {Image, Modal, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/UI/CustomModal.style';
import CustomButton from './CustomButton';
import colors from '../../constants/colors';
import screens from '../../constants/screens';

function CustomModal({text}) {
  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.popToTop();
    navigation.navigate(screens.signInScreen);
  };
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/Success.png')} />
        </View>
        <Text style={styles.text}>{text}</Text>
        <CustomButton style={styles.button} onPress={navigationHandler} primary>
          Sign In
        </CustomButton>
      </View>
    </View>
  );
}

export default CustomModal;
