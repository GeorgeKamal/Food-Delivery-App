import AsyncStorage from '@react-native-async-storage/async-storage';
import GetLocation from 'react-native-get-location';
import axios from 'axios';

export async function saveData(key, value) {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
    console.log(
      `saved data with key ${key} and value ${stringValue} successfully`,
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log(
      `loaded data with key ${key} and value ${jsonValue} successfully`,
    );
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
  }
}

export const convertToTwoDimesional = data => {
  const newData = [];

  for (let index = 0; index < data.length; index += 2) {
    newData.push(data.slice(index, index + 2));
  }
  return newData;
};

export async function getCurrentLocationName() {
  const {latitude, longitude} = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 10000,
  });
  const URL = `https://nominatim.openstreetmap.org/reverse.php?lat=${latitude}&lon=${longitude}&zoom=18&format=json`;

  const response = await axios.get(URL);
  return response.data.display_name;
}
