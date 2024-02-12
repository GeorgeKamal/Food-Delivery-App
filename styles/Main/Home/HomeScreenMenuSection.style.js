import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 4,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  title: {
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
  listView: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
  },
  doubleCardView: pad => ({
    flex: 1,
    justifyContent: 'space-between',
    paddingEnd: pad ? 20 : 0,
  }),
  iconContainer: isActive => ({
    width: 70,
    height: 70,
    backgroundColor: isActive ? colors.primary : colors.secondary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 5,
  }),
  categoryIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryName: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colors.black,
    textAlign: 'center',
  },
});

export default styles;
