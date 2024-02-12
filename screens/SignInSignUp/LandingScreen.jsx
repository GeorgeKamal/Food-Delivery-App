import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/SignInSignUp/LandingScreen.style';
import CustomButton from '../../components/UI/CustomButton';
import screens from '../../constants/screens';
import Footer from '../../components/UI/Footer';

function LandingScreen() {
  const navigation = useNavigation();

  const navigationHandler = screenName => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.root}>
      <View style={styles.mainUpper}>
        <View style={styles.imageContainer}>
          <View style={styles.imageBackground}>
            <Image source={require('../../assets/images/Hamburger.png')} />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton
              primary
              onPress={navigationHandler.bind(null, screens.signInScreen)}>
              Sign In
            </CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              onPress={navigationHandler.bind(null, screens.signUpScreen)}>
              Sign Up
            </CustomButton>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );

  //   // version 1
  //   return (
  //     <View style={styles.view}>
  //       <View style={styles.mainContent}>
  //         <View style={styles.backgroundView}>
  //           <View style={styles.background}>
  //             <Image
  //               style={styles.image}
  //               source={require('../../assets/images/Hamburger.png')}
  //             />
  //           </View>
  //         </View>
  //         <View style={styles.buttons}>
  //           <CustomButton primary>Sign in</CustomButton>
  //           <CustomButton>Sign up</CustomButton>
  //         </View>
  //       </View>
  //       <View style={styles.footer}>
  //         <View style={styles.footerUpperContent}>
  //           <View style={styles.line} />
  //           <View style={styles.connectView}>
  //             <Text style={styles.connectText}> Or connect with </Text>
  //           </View>
  //         </View>
  //         <View style={styles.footerLowerContent}>
  //           <View style={styles.footerImage}>
  //             <Image
  //               style={styles.footerImage}
  //               source={require('../../assets/images/FooterImage.png')}
  //             />
  //           </View>
  //           <View style={styles.footerLinks}>
  //             {/* <View style={{flex:1}}> */}
  //             <Image
  //               style={styles.image}
  //               source={require('../../assets/images/Facebook.png')}
  //             />
  //             {/* </View> */}
  //             {/* <View style={{flex:1}}> */}
  //             <Image
  //               style={styles.image}
  //               source={require('../../assets/images/GooglePlus.png')}
  //             />
  //             {/* </View> */}
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   );
}

export default LandingScreen;
