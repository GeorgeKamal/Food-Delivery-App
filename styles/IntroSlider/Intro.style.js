import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: '15%',
    borderWidth: 2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '5%',
  },
  image: {
    margin: '10%',
  },
});

export default styles;
