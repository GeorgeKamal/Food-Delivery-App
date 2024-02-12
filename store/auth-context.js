import React from 'react';

const AuthContext = React.createContext({
  firstLoad: true,
  proceed: () => {},
  signedIn: false,
  userImage: '',
  updateUserImage: image => {},
  cart: [],
  addToCart: item => {},
  removeFromCart: index => {},
  signIn: () => {},
  signOut: () => {},
});

export default AuthContext;
