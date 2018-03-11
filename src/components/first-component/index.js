/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import R from 'ramda';

// import withApollo from 'apollo-client';
import { compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import { SimpleButton } from '../common-components/button';
import { Input } from '../common-components/input';
import {
  onRegisteredNewUser,
  onAuthorizationUser,
  onGetToken,
  onGetUsers,
} from '../../api-store/auth/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const firstQuery = gql`
// query{
//   users{
//     name
//   }
// }
// `;

// const registrationUserMutation = gql`
// mutation (
//   $name: String!,
//   $password: String!,
// ){
//   registration(
//     name: $name,
//     password: $password,
//   ) {
//     name
//   }
// }
// `;

class FirstComponent extends Component {
  state = {
    name: '',
    password: '',
  };

  // componentDidMount() {
  // const { client } = this.props;
  // client.query({ query: firstQuery }).then(() => {
  //   const { posts } = client.readQuery({
  //     query: firstQuery,
  //   });
  //
  //   console.log('posts', posts);
  // },
  // );
  // }

  registeredNewUser = () => {
    const { name, password } = this.state;
    const answer = onRegisteredNewUser({ name, password });
    console.log('answer', answer);
  };

  getUserData = () => {
    const { name, password } = this.state;
    onAuthorizationUser({ name, password });
  };

  onCheckCache = () => {
    const token = onGetToken();
    console.log('value', token);
  };

  getUsers = () => {
    const users = onGetUsers();
    console.log('users', users);
  };

  onTypeText = (text, name) => this.setState({ [name]: text });

  render() {
    console.log('state', this.state);
    console.log('props', this.props);

    return (
      <View style={styles.container}>

        <Input
          placeholder="e-mail"
          onChangeText={text => this.onTypeText(text, 'name')} />
        <Input
          placeholder="password"
          containerStyle={{ marginTop: 20, marginBottom: 20 }}
          onChangeText={text => this.onTypeText(text, 'password')} />

        <SimpleButton
          title="Apply"
          onPress={this.registeredNewUser} />

        <Input
          placeholder="e-mail"
          onChangeText={text => this.onTypeText(text, 'name')} />
        <Input
          placeholder="password"
          containerStyle={{ marginTop: 20, marginBottom: 20 }}
          onChangeText={text => this.onTypeText(text, 'password')} />

        <SimpleButton
          title="Login"
          onPress={this.getUserData} />

        <SimpleButton
          title="CheckCache"
          onPress={this.onCheckCache} />

        <SimpleButton
          title="Get Users"
          onPress={this.getUsers} />
      </View>
    );
  }
}

export default compose(
  withApollo,
)(FirstComponent);
