import {Image, StatusBar, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import data from './IntroData';
import styles from '../../styles/IntroSlider/Intro.style';
import {useEffect} from 'react';

const render = dataItem => (
  <View style={styles.view}>
    <Image style={styles.image} source={dataItem.item.image} />
    <Text style={styles.title}>{dataItem.item.title}</Text>
    <Text style={styles.text}>{dataItem.item.text}</Text>
  </View>
);

function Intro({onDone}) {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <AppIntroSlider
      data={data}
      renderItem={render}
      showNextButton={false}
      onDone={onDone}
      doneLabel="Get Started!"
    />
  );
}

export default Intro;
