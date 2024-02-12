import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: '5%',
    borderRadius: 25,
  },
  imageContainer: {
    padding: '10%',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
    padding: '3%',
    textAlign: 'center',
    color: colors.white,
  },
  button: {
    alignSelf: 'stretch',
  },
});
