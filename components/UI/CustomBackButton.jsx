import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function CustomBackButton({invert, onPress}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={
        onPress
          ? onPress
          : () => {
              navigation.goBack();
            }
      }>
      <Image
        style={invert ? {transform: [{scaleX: -1}]} : {}}
        source={require('../../assets/images/Back.png')}
      />
    </TouchableOpacity>
  );
}

export default CustomBackButton;
