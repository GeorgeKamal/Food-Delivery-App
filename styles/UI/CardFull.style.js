import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingVertical: '5%',
  },
  cardView: color => ({
    backgroundColor: color,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    borderRadius: 20,
    height: 130,
  }),
  nameContainer: {
    justifyContent: 'center',
    padding: '5%',
  },
  name: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: '5%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
