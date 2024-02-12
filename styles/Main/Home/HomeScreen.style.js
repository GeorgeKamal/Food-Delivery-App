import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: '10%',
    paddingHorizontal: '5%',
  },
  main: {
    flex: 1,
  },
  topContainer: searching => ({
    flex: 1.25,
    justifyContent: searching ? 'flex-start' : 'space-evenly',
  }),
  searchView: searching => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 50,
    paddingHorizontal: searching ? '6%' : '3%',
  }),
  searchText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colors.black,
    width: '90%',
    paddingHorizontal: '3%',
  },
  searchClose: {
    padding: '2%',
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: '3%',
  },
  locationTouchable: {
    flexDirection: 'row',
    alignItems:"center"
  },
  locationText: {
    color: colors.black,
    paddingHorizontal: 5,
  },
  nearMeSection: {
    flex: 2,
  },
  nearMeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  nearMeText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  viewAll: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: colors.black,
  },
});

export default styles;
