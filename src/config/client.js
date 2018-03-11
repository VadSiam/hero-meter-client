import { AsyncStorage } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { persistCache } from 'apollo-cache-persist';

import { onGetToken } from '../api-store/auth/actions';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphiql' });

const cache = new InMemoryCache();

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = onGetToken();

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));

  return forward(operation);
});

const errorLogger = onError(({ networkError }) => {
  /* eslint-disable no-console */
  console.error('ERROR', networkError);
});

persistCache({
  cache,
  storage: AsyncStorage,
});

export const client = new ApolloClient({
  link: from([
    authMiddleware,
    errorLogger,
    httpLink,
  ]),
  cache,
});
