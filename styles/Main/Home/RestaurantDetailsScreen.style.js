import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: '20%',
    paddingHorizontal: '5%',
  },
  imageContainer: {
    flex: 1,
    paddingVertical: '5%',
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  line: {
    borderWidth: 1,
    borderColor: colors.grayLight,
    marginHorizontal: '20%',
  },
  aboutView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '42%',
  },
  aboutKey: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colors.gray,
  },
  aboutValue: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: colors.gray,
  },
  button: {
    paddingVertical: '5%',
  },
});

export default styles;
