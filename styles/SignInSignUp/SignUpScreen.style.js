import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  mainUpper: {
    flex: 8,
    marginTop: '10%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
  },
  titleContainer: {
    marginVertical: '1%',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.black,
  },
  errorText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colors.error,
  },
  buttonsContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    paddingHorizontal: '5%',
  },
  buttonContainer: {
    paddingVertical: '5%',
  },
  inputContainer: {
    paddingVertical: '3%',
  },
  input: {
    backgroundColor: colors.secondary,
    color: colors.black,
    borderRadius: 50,
    paddingHorizontal: 25,
  },
  forgotContainer: {
    alignItems: 'flex-end',
  },
});

export default styles;
