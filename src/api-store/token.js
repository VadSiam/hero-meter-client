import { AsyncStorage } from 'react-native';

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
    /* eslint-disable no-console */
  } catch (error) { console.error('error save token', error); }
};

export const getToken = () => {
  const token = AsyncStorage.getItem('token');
  return token;
};
