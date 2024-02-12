import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  root: {
    marginTop: '20%',
    paddingHorizontal: '5%',
    flex: 1,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  order: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gray,
  },
  button: {
    paddingVertical: '5%',
  },
});

export default styles;
