import {Text, View} from 'react-native';
import restaurants from '../../constants/restaurants';
import RestaurantsList from '../../screens/Main/Home/RestaurantsList';
import styles from '../../styles/UI/SearchResults.style';

function SearchResults({query}) {
  if (query.trim().length === 0) {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Start Searching!</Text>
      </View>
    );
  }
  const data = restaurants.filter(
    restaurant =>
      restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
      restaurant.serves.toLowerCase().includes(query.toLowerCase()),
  );
  return <RestaurantsList data={data} pad />;
}

export default SearchResults;
