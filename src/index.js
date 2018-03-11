/* @flow */

import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Font } from 'expo';

import { client } from './config/client';
import FirstComponent from './components/first-component';

const Pancake = require('./assets/fonts/KBPancakeParty.ttf');

export default class RootComponent extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      Pancake,
    });
    this.fontLoadComplete();
  }

  fontLoadComplete = () => this.setState({ fontLoaded: true });

  render() {
    const { fontLoaded } = this.state;
    if (!fontLoaded) return null;

    return (
      <ApolloProvider client={client}>
        <FirstComponent />
      </ApolloProvider>
    );
  }
}
