import {useEffect, useState} from 'react';
import AuthContext from './auth-context';
import {getData, saveData} from '../utils/Utilities';
import {storage} from '../storage/storage';
import {Image} from 'react-native';

function AuthProvider(props) {
  let previousFirstLoad =
    storage.getBoolean('firstLoad') === undefined
      ? true
      : storage.getBoolean('firstLoad');
  let previousSignedIn =
    storage.getBoolean('signedIn') === undefined
      ? false
      : storage.getBoolean('signedIn');
  const [firstLoad, setfirstLoad] = useState(previousFirstLoad);
  const [signedIn, setSignedIn] = useState(previousSignedIn);
  const [cart, setCart] = useState([]);
  const [userImage, setUserImage] = useState(
    Image.resolveAssetSource(require('../assets/images/User.png')).uri,
  );

  // useEffect(() => {
  //   getData('authDetails').then(data => {
  //     if (data) {
  //       setfirstLoad(data.firstLoad);
  //       setSignedIn(data.signedIn);
  //     } else {
  //       saveData('authDetails', {signedIn, firstLoad});
  //     }
  //   });
  // }, []);

  const value = {
    firstLoad,
    proceed: () => {
      setfirstLoad(false);
      // saveData('authDetails', {signedIn, firstLoad: false});
      storage.set('firstLoad', false);
    },
    signedIn,
    userImage,
    updateUserImage: image => {
      setUserImage(image);
    },
    cart,
    addToCart: item => {
      setCart(previousState => [...previousState, item]);
    },
    removeFromCart: index => {
      const newCart = [...cart]; // Create a copy of the cart array
      newCart.splice(index, 1); // Remove the item at the specified index
      setCart(newCart); // Update the cart state with the new array
    },
    signIn: () => {
      setSignedIn(true);
      // saveData('authDetails', {signedIn: true, firstLoad});
      storage.set('signedIn', true);
    },
    signOut: () => {
      setSignedIn(false);
      // saveData('authDetails', {signedIn: false, firstLoad});
      storage.set('signedIn', false);
    },
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default AuthProvider;
