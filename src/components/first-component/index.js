/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

// import withApollo from 'apollo-client';
import { compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import { SimpleButton } from '../common-components/button';
import { Input } from '../common-components/input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const firstQuery = gql`
query{
  users{
    name
  }
}
`;

const registerMutation = gql`
mutation {
  registration(name: "vad", password: "0000") {
    name
  }
}
`;

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

  onRegisteredNewUser = () => {
    const { name, password } = this.state;
  };

  onTypeText = (text, name) => this.setState({ [name]: text });

  render() {
    console.log('text', this.state);

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
          onPress={() => console.log('work!')} />
      </View>
    );
  }
}

export default compose(
  withApollo,
)(FirstComponent);
