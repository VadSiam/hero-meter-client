/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// import withApollo from 'apollo-client';
import { compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const firstQuery = gql`
  query {
    posts{
      _id
      title
      content
      comments {
        _id
        postId
        content
      }
    }
  }
`;


class FirstComponent extends Component {
  state = {}

  componentDidMount() {
    const { client } = this.props;
    client.query({ query: firstQuery }).then(() => {
      const { posts } = client.readQuery({
        query: firstQuery,
      });

      console.log('posts', posts);
    },
    );
  }

  render() {
    console.log('props', this.props);

    return (
      <View style={styles.container}>
        <Text>I am the MyComponent component</Text>
      </View>
    );
  }
}


export default compose(
  withApollo,
)(FirstComponent);
