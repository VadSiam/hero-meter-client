import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { from } from 'apollo-link';
// import { ApolloLink, from } from 'apollo-link';
import { onError } from 'apollo-link-error';


const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       authorization: localStorage.getItem('token') || null,
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
