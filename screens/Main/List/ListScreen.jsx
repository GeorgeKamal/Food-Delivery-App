import {Text, View} from 'react-native';
import styles from '../../../styles/Main/List/ListScreen.style';

function ListScreen() {
  return (
    <View style={styles.root}>
      <Text style={{fontSize: 20, color: 'red'}}>list screen</Text>
    </View>
  );
}

export default ListScreen;
