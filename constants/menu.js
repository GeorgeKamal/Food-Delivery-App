import {convertToTwoDimesional} from '../utils/Utilities';
import categories from './categories';

/**
  const menu = [
    {
      name: 'Popcorn',
      image: require('../assets/images/Popcorn.png'),
    },
    {
      name: 'Nuts',
      image: require('../assets/images/Nuts.png'),
    },
    {
      name: 'Pretzels',
      image: require('../assets/images/Pretzels.png'),
    },
    {
      name: 'Chips',
      image: require('../assets/images/Chips.png'),
    },
    {
      name: 'Crackers',
      image: require('../assets/images/Crackers.png'),
    },
    {
      name: 'Cookies',
      image: require('../assets/images/Cookies.png'),
    },
  ];
*/

const menu = {
  Drink: [
    {name: 'Coffee', image: require('../assets/images/Coffee.png')},
    {
      name: 'Tea',
      image: require('../assets/images/Tea.png'),
    },
    {
      name: 'Cocktails',
      image: require('../assets/images/Cocktails.png'),
    },
    {
      name: 'Fresh Juice',
      image: require('../assets/images/FreshJuice.png'),
    },
    {
      name: 'Beer',
      image: require('../assets/images/Beer.png'),
    },
    {
      name: 'Whisky',
      image: require('../assets/images/Whisky.png'),
    },
  ],
  Food: [
    {name: 'Burgers', image: require('../assets/images/Burgers.png')},
    {
      name: 'Fruits',
      image: require('../assets/images/Fruits.png'),
    },
    {
      name: 'Pizza',
      image: require('../assets/images/Pizza.png'),
    },
    {
      name: 'Sushi',
      image: require('../assets/images/Sushi.png'),
    },
    {
      name: 'BBQ',
      image: require('../assets/images/BBQ.png'),
    },
    {
      name: 'Noodles',
      image: require('../assets/images/Noodles.png'),
    },
  ],
  Cake: [
    {
      name: 'Chocolate Cake',
      image: require('../assets/images/ChocolateCake.png'),
    },
    {
      name: 'Vanilla Cake',
      image: require('../assets/images/VanillaCake.png'),
    },
    {
      name: 'Cheese Cake',
      image: require('../assets/images/CheeseCake.png'),
    },
    {
      name: 'Red Velvet',
      image: require('../assets/images/RedVelvet.png'),
    },
    {
      name: 'Cup Cakes',
      image: require('../assets/images/CupCakes.png'),
    },
    {
      name: 'Swiss Roll',
      image: require('../assets/images/SwissRoll.png'),
    },
  ],
  Snack: [
    {
      name: 'Popcorn',
      image: require('../assets/images/Popcorn.png'),
    },
    {
      name: 'Mixed Nuts',
      image: require('../assets/images/MixedNuts.png'),
    },
    {
      name: 'Pretzels',
      image: require('../assets/images/Pretzels.png'),
    },
    {
      name: 'Chips',
      image: require('../assets/images/Chips.png'),
    },
    {
      name: 'Crackers',
      image: require('../assets/images/Crackers.png'),
    },
    {
      name: 'Cookies',
      image: require('../assets/images/Cookies.png'),
    },
  ],
};

// result = Object.assign(
//   ...Object.entries(menu).map(([key, value]) => ({
//     [key]: convertToTwoDimesional(value),
//   })),
// );
// console.log(result);

export default Object.assign(
  ...Object.entries(menu).map(([key, value]) => ({
    [key]: convertToTwoDimesional(value),
  })),
);

// export default foods
