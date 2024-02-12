import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  mainUpper: {
    flex: 8,
    marginTop: '10%',
  },
  imageContainer: {
    flex: 4,
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    paddingHorizontal: '10%',
    paddingVertical: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: colors.primaryLight,
  },
  buttonsContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    paddingHorizontal: '5%',
  },
  buttonContainer: {
    paddingVertical: '3%',
  },
});

/**
  // version 1
  const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.white,
      fontFamily: 'Roboto',
      fontSize: 14,
      textAlign: 'center',
    },
    backgroundView: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '15%',
    },
    background: {
      backgroundColor: colors.primaryLight,
      borderRadius: 30,
      padding: '10%',
      paddingVertical: '15%',
      marginHorizontal: '10%',
    },
    // image: {
    //   opacity: 1,
    // },
    mainContent: {
      flex: 2,
      justifyContent: 'space-evenly',
      width: '100%',
    },
    footer: {
      flex: 1,
      justifyContent: 'space-between',
      width: '100%',
      // paddingTop: '10%',
    },
    footerUpperContent: {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '25%',
    },
    footerLowerContent: {
      // flex:9
      flexDirection: 'row',
    },
    footerImage: {
      // flex: 1,
    },
    footerLinks: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: '5%',
      paddingHorizontal: '5%',
    },
    buttons: {
      flex: 1,
      justifyContent: 'space-evenly',
      paddingHorizontal: '5%',
    },
    line: {
      flex: 7,
      borderWidth: 1,
      borderColor: colors.grayLight,
    },
    connectView: {
      flex: 3,
    },
    connectText: {
      color: colors.gray,
    },
  });
*/

export default styles;
