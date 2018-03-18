/* @flow */

import R from 'ramda';
// $FlowFixMe
// import { AsyncStorage } from 'react-native';


import { client } from '../../config/client';
import {
  autorizationUserMutation,
  autorizationTokenQuery,
  registrationUserMutation,
  usersQuery,
} from './schema';

type ThisObject = {
  name: string,
  password: string,
}

export const onRegisteredNewUser = async ({ name, password }: ThisObject) => {
  try {
    const registration = await client.mutate({
      mutation: registrationUserMutation,
      variables: {
        name,
        password,
      },
    });
    return registration;
    /* eslint-disable no-console */
  } catch (error) { console.error('error', error); }
};

export const onAuthorizationUser = async ({ name, password }: ThisObject) => {
  try {
    const { data } = await client.mutate({
      mutation: autorizationUserMutation,
      variables: {
        name,
        password,
      },
    });
    client.writeQuery({ query: autorizationTokenQuery, data }); // write token to apollo-cache
  } catch (error) { console.error('error', error); }
};

export const onGetToken = () => {
  // AsyncStorage.clear();
  try {
    const response = client.readQuery({ // read token from apollo-cache
      query: autorizationTokenQuery, variables: { authorization: '' },
    });
    const token = R.path(['authorization', 'value'], response);
    return token;
  } catch (error) {
    console.log('new->', error);
    return null;
  }
};

export const onGetUsers = async () => {
  try {
    const { data } = await client.query({
      query: usersQuery,
    });
    client.writeQuery({ query: usersQuery, data }); // write token to apollo-cache
    return data;
  } catch (error) {
    console.log('new->', error);
  }
};
