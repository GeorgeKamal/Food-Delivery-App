import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  image: {
    borderRadius: 20,
    marginEnd: 20,
    height: 100,
    width: 100,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'space-between',
    padding: '5%',
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
  likeDisklikeContainer: {
    flexDirection: 'row',
    paddingEnd: '35%',
  },
  likeDisklike: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likeDisklikeText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: colors.gray,
  },
  separator: {
    color: colors.gray,
    paddingHorizontal: '5%',
  },
  price: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    color: colors.green,
  },
  rightComponentContainer: {
    justifyContent: 'center',
  },
});

export default styles;
