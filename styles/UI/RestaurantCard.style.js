import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 20,
    marginEnd: 20,
    height: 130,
    width: 130,
  },
  detailsContainer: {
    justifyContent: 'space-evenly',
    paddingBottom: '10%',
    paddingEnd: '10%',
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  location: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: colors.gray,
    paddingHorizontal: 5,
  },
  distanceTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  distanceTime: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: colors.gray,
    paddingHorizontal: 5,
  },
});

export default styles;
