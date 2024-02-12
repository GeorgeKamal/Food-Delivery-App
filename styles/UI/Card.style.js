import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: color => ({
    width: 130,
    height: 130,
    borderRadius: 20,
    backgroundColor: color,
    overflow: 'hidden',
  }),
  name: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
  },
  image: {
    width: 130,
    height: 130,
    // position: 'absolute',
    // left: '25%',
    // top: '25%',
  },
});

export default styles;
