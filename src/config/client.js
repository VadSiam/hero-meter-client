import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';
import { onError } from 'apollo-link-error';

// import { getToken } from '../api/token';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphiql' });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   const token = async () => {
//     const response = await getToken();
//     return response;
//   };
//
//   console.log('token', token);
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       authorization: token || null,
//     },
//   }));
//
//   return forward(operation);
// });

const errorLogger = onError(({ networkError }) => {
  /* eslint-disable no-console */
  console.error('ERROR', networkError);
});

export const client = new ApolloClient({
  link: from([
    // authMiddleware,
    errorLogger,
    httpLink,
  ]),
  cache: new InMemoryCache(),
});
