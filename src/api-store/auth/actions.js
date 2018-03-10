import R from 'ramda';

import {
  autorizationUserMutation,
  autorizationTokenQuery,
  registrationUserMutation,
} from './schema';

export const onRegisteredNewUser = async (client, name, password) => {
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

export const onAuthorizationUser = async (client, name, password) => {
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

export const onGetToken = client => {
  const response = client.readQuery({ // read token from apollo-cache
    query: autorizationTokenQuery,
  });
  const token = R.path(['authorization', 'value'], response);
  return token;
};
