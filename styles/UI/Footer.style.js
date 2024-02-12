import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default styles = StyleSheet.create({
  separator: {
    flex: 0.5,
    flexDirection: 'row',
  },
  lineContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  line: {
    borderWidth: 1,
    borderColor: colors.grayLight,
  },
  gap: {
    flex: 0.1,
  },
  connectView: {
    flex: 1,
    justifyContent: 'center',
  },
  connectText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colors.gray,
  },
  mainLower: {
    flex: 1.75,
    flexDirection: 'row',
    paddingTop: '2%',
  },
  lowerImage: {
    flex: 3,
  },
  socialMedia: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
