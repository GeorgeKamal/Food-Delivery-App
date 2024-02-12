import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './colors';

const categories = [
  {
    name: 'Drink',
    icon: isActive => (
      <Feather
        name="coffee"
        size={30}
        color={isActive ? colors.white : colors.black}
      />
    ),
  },
  {
    name: 'Food',
    icon: isActive => (
      <FontAwesome5
        name="hamburger"
        size={30}
        color={isActive ? colors.white : colors.black}
      />
    ),
  },
  {
    name: 'Cake',
    icon: isActive => (
      <MaterialCommunityIcons
        name="cupcake"
        size={30}
        color={isActive ? colors.white : colors.black}
      />
    ),
  },
  {
    name: 'Snack',
    icon: isActive => (
      <FontAwesome6
        name="bowl-rice"
        size={30}
        color={isActive ? colors.white : colors.black}
      />
    ),
  },
];

export default categories;
