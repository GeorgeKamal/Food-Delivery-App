import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 4,
    overflow: 'hidden',
    borderRadius: 20,
  },
  padding: pad => ({
    paddingBottom: pad ? 20 : 0,
  }),
  paddingFull: {
    paddingHorizontal: '5%',
    marginVertical: '5%',
    borderRadius: 20,
  },
});

export default styles;
