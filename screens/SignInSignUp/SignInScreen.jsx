import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/SignInSignUp/SignInScreen.style';
import CustomButton from '../../components/UI/CustomButton';
import colors from '../../constants/colors';
import {useContext, useState} from 'react';
import SignInSchema from '../../schemas/SignInSchema';
import Footer from '../../components/UI/Footer';
import screens from '../../constants/screens';
import AuthContext from '../../store/auth-context';

function SignInScreen() {
  const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const navigationHandler = screenName => {
    navigation.navigate(screenName);
  };

  const changeTextHandler = (isPassword, text) => {
    isPassword ? setPassword(text) : setUsername(text);
    setError();
  };

  const submitHandler = async () => {
    console.log(username, password);
    try {
      validationResult = await SignInSchema.validate({username, password});
      console.log(validationResult);
      authContext.signIn();
    } catch (error) {
      setError(error.errors[0]);
    }
  };
  return (
    <View style={styles.root}>
      <View style={styles.mainUpper}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign In</Text>
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={colors.grayDark}
            onChangeText={changeTextHandler.bind(null, false)}
            autoComplete="off"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={colors.grayDark}
            onChangeText={changeTextHandler.bind(null, true)}
            autoComplete="off"
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton primary onPress={submitHandler}>
            Sign In
          </CustomButton>
        </View>
        <View style={styles.forgotContainer}>
          <TouchableOpacity
            onPress={navigationHandler.bind(
              null,
              screens.forgotPasswordScreen,
            )}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
}

export default SignInScreen;
