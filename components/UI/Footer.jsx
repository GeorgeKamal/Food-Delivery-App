import {
  Alert,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../../styles/UI/Footer.style';
import links from '../../constants/links';

function Footer() {
  const openURLHandler = async link => {
    try {
      await Linking.openURL(link);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'An Error Occured');
    }
  };
  return (
    <>
      <View style={styles.separator}>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
        </View>
        <View style={styles.gap}></View>
        <View style={styles.connectView}>
          <Text style={styles.connectText}>Or connect with</Text>
        </View>
      </View>
      <View style={styles.mainLower}>
        <View style={styles.lowerImage}>
          <Image source={require('../../assets/images/FooterImage.png')} />
        </View>
        <View style={styles.socialMedia}>
          <TouchableOpacity onPress={openURLHandler.bind(null, links.facebook)}>
            <Image source={require('../../assets/images/Facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openURLHandler.bind(null, links.google)}>
            <Image source={require('../../assets/images/GooglePlus.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Footer;
