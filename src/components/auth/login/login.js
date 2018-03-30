/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  // $FlowFixMe
} from 'react-native';

import { SimpleButton } from '../../common-components/button';
import Input from '../../common-components/input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputPassword: {
    marginTop: 20,
    marginBottom: 20,
  },
});

type Props = {
  onAuthorizationUser: ({name: string, password: string}) => void,
}
type State = {
  name: string,
  password: string,
  clear: boolean,
};

class LoginComponent extends Component<Props, State> {
  state = {
    name: '',
    password: '',
    clear: false,
  };

  onClearFields = () => this.setState({ clear: true }, () => this.onResetClear());

  onResetClear = () => this.setState({ clear: false });

  loginUser = () => {
    const { name, password } = this.state;
    const { onAuthorizationUser } = this.props;
    onAuthorizationUser({ name, password });
    this.setState({ name: '', password: '' });
    this.onClearFields();
  };

  onTypeText = (text: ?string, name: string) => this.setState({ [name]: text });


  render() {
    const { clear } = this.state;

    return (
      <View style={styles.container}>

        <Input
          clear={clear}
          placeholder="e-mail"
          onChangeText={text => this.onTypeText(text, 'name')} />

        <Input
          clear={clear}
          placeholder="password"
          containerStyle={styles.inputPassword}
          onChangeText={text => this.onTypeText(text, 'password')} />

        <SimpleButton
          title="Login"
          onPress={this.loginUser} />

      </View>
    );
  }
}

export default LoginComponent;
