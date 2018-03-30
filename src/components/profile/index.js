/* @flow */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  // $FlowFixMe
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Authorization = () => (
  <View style={styles.container}>
    <Text>Profile!</Text>
  </View>
);

export default Authorization;
