import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/SignInSignUp/SignUpScreen.style';
import CustomButton from '../../components/UI/CustomButton';
import colors from '../../constants/colors';
import {useState} from 'react';
import ForgotPasswordSchema from '../../schemas/ForgotPasswordSchema';
import CustomModal from '../../components/UI/CustomModal';
import Footer from '../../components/UI/Footer';

function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [error, setError] = useState();
  const [showModal, setShowModal] = useState(false);

  const navigationHandler = screenName => {
    navigation.navigate(screenName);
  };

  const changeTextHandler = text => {
    setUsername(text);
    setError();
  };

  const submitHandler = async () => {
    console.log(username);
    try {
      validationResult = await ForgotPasswordSchema.validate({username});
      console.log(validationResult);
      setShowModal(true);
    } catch (error) {
      console.log(error);
      setError(error.errors[0]);
    }
  };
  return (
    <>
      <Modal
        visible={showModal}
        animationType="fade"
        statusBarTranslucent
        transparent>
        <CustomModal text={'You Have Successfully Reset Your Password'} />
      </Modal>
      <View style={styles.root}>
        <View style={styles.mainUpper}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Reset Password</Text>
          </View>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              placeholderTextColor={colors.grayDark}
              onChangeText={changeTextHandler}
              autoComplete="off"
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton primary onPress={submitHandler}>
              Reset
            </CustomButton>
          </View>
          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.connectText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </View>
    </>
  );
}

export default ForgotPasswordScreen;
