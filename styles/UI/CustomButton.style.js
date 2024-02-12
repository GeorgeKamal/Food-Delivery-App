import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default styles = StyleSheet.create({
  view: {
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 5,
  },
  viewPrimary: {
    backgroundColor: colors.primary,
  },
  viewSecondary: {
    backgroundColor: colors.secondary,
  },
  viewPrimaryPressed: {
    backgroundColor: colors.secondary,
  },
  viewSecondaryPressed: {
    backgroundColor: colors.primary,
  },
  viewDisabled: {
    backgroundColor: colors.disabled,
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
    padding: '3%',
    textAlign: 'center',
  },
  textPrimary: {
    color: colors.white,
  },
  textSecondary: {
    color: colors.black,
  },
  textPrimaryPressed: {
    color: colors.black,
  },
  textSecondaryPressed: {
    color: colors.white,
  },
});
