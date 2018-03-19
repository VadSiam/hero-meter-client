/* @flow */

import React, { Component } from 'react';
import { NonLoginNavigator } from './app-navigators';


type State = {
  token: ?string,
};
type Props = {
  onGetToken: () => void,
};

export default class RouterComponent extends Component<Props, State> {
  state = {
    token: '',
  }

  componentWillMount() {
    const token = this.props.onGetToken();
    this.setState({ token });
  }

  render() {
    const { token } = this.state;
    console.log('TOKEN', token);

    return token
      ? <NonLoginNavigator />
      : <NonLoginNavigator />;
  }
}
