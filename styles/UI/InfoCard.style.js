import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  keyView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  keyText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colors.gray,
  },
  valueView: {
    flex: 3,
    justifyContent: 'center',
  },
});

export default styles;
