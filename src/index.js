/* @flow */

import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import { client } from './config/client';
import FirstComponent from './components/first-component';


export default class RootComponent extends Component {
  state = {}

  render() {
    return (
      <ApolloProvider client={client}>
        <FirstComponent />
      </ApolloProvider>
    );
  }
}
