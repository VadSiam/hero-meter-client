import { AsyncStorage } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { persistCache } from 'apollo-cache-persist';
import { withClientState } from 'apollo-link-state';

import { onGetToken } from '../api-store/auth/actions';

const cache = new InMemoryCache();

const defaultState = {
  currentGame: {
    __typename: 'currentGame',
    teamAScore: 0,
    teamBScore: 0,
    teamAName: 'Team A',
    teamBName: 'Team B',
  },
};

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updateGame: (_, { index, value }, { cache }) => {
        const query = gql`
          query GetCurrentGame {
            currentGame @client {
              teamAScore
              teamBScore
              teamAName
              teamBName
            }
          }
        `;
        const previous = cache.readQuery({ query });
        const data = {
          currentGame: {
            ...previous.currentGame,
            [index]: value,
          },
        };

        cache.writeQuery({ query, data });
      },
      resetCurrentGame: (_, d, { cache }) => {
        cache.writeData({ data: defaultState });
      },
    },
  },
});

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphiql' });

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
  console.log('<<<ERROR>>>', networkError);
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
