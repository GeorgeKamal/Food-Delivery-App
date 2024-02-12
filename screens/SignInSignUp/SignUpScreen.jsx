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
import SignUpSchema from '../../schemas/SignUpSchema';
import CustomModal from '../../components/UI/CustomModal';
import Footer from '../../components/UI/Footer';

function SignUpScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [error, setError] = useState();
  const [showModal, setShowModal] = useState(false);

  const navigationHandler = screenName => {
    navigation.navigate(screenName);
  };

  const changeTextHandler = (type, text) => {
    switch (type) {
      case 'username':
        setUsername(text);
        break;
      case 'password':
        setPassword(text);
        break;
      case 'passwordConfirm':
        setPasswordConfirm(text);
        break;

      default:
        break;
    }
    setError();
  };

  const submitHandler = async () => {
    console.log(username, password, passwordConfirm);
    try {
      validationResult = await SignUpSchema.validate({
        username,
        password,
        passwordConfirm,
      });
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
        <CustomModal text={'You Have Successfully Registered'} />
      </Modal>
      <View style={styles.root}>
        <View style={styles.mainUpper}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sign Up</Text>
          </View>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              placeholderTextColor={colors.grayDark}
              onChangeText={changeTextHandler.bind(null, 'username')}
              autoComplete="off"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor={colors.grayDark}
              onChangeText={changeTextHandler.bind(null, 'password')}
              autoComplete="off"
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Re-enter Password"
              placeholderTextColor={colors.grayDark}
              onChangeText={changeTextHandler.bind(null, 'passwordConfirm')}
              autoComplete="off"
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton primary onPress={submitHandler}>
              Sign Up
            </CustomButton>
          </View>
        </View>
        <Footer />
      </View>
    </>
  );
}

export default SignUpScreen;
