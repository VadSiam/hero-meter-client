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
    <Text>LOGINED!!!</Text>
  </View>
);

export default Authorization;
