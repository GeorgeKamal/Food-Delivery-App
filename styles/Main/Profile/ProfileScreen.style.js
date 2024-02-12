import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  root: {
    marginTop: '20%',
    paddingHorizontal: '5%',
    flex: 1,
  },
  briefInfoContainer: {
    flex: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 100,
    overflow: 'hidden',
  },
  briefInfoText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    paddingVertical: '2%',
  },
  number: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: colors.black,
  },
  content: {
    flex: 10,
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingVertical: '5%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: '5%',
    paddingVertical: '1%',
  },
  listItemText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
  },
});

export default styles;
