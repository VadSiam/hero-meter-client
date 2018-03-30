/* @flow */
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  // $FlowFixMe
} from 'react-native';
import {
  compose,
  graphql,
} from 'recompose';

import {
  autorizationUserMutation,
  autorizationTokenQuery,
  registrationUserMutation,
  usersQuery,
} from '../../../api-store/auth/schema';

// import {
//   onRegisteredNewUser,
// } from '../../../api-store/auth/actions';

// export const onRegisteredNewUser = async ({ name, password }: ThisObject) => {
//   try {
//     const registration = await client.mutate({
//       mutation: registrationUserMutation,
//       variables: {
//         name,
//         password,
//       },
//     });
//     return registration;
//     /* eslint-disable no-console */
//   } catch (error) { console.error('error', error); }
// };

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
});

// type Props = {
//   onRegisteredNewUser: ({name: string, password: string}) => void,
// }
type State = {
  name: string,
  password: string,
  clear: boolean,
};

class SignUpComponent extends Component<{}, State> {
  state = {
    name: '',
    password: '',
    clear: false,
  };

  onClearFields = () => this.setState({ clear: true }, () => this.onResetClear());

  onResetClear = () => this.setState({ clear: false });

  signUpUser = () => {
    const { name, password } = this.state;
    // onRegisteredNewUser({ name, password });
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
          containerStyle={{ marginTop: 20, marginBottom: 20 }}
          onChangeText={text => this.onTypeText(text, 'password')} />

        <SimpleButton
          title="SignUp"
          onPress={this.signUpUser} />

      </View>
    );
  }
}

// export default SignUpComponent;


const SignUp = compose(
  graphql(registrationUserMutation, {
    props: ({ data: { loading } }) => ({
      loading,
    }),
  }),
  // withProps(props => ({
  //   ...props,
  //   onRegisteredNewUser,
  // })),
)(SignUpComponent);

export default SignUp;
