/* @flow weak */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { FormInput } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export const Input = ({
  onChangeText,
  title = 'Name',
  placeholder,
  containerStyle,
}) => (
  <View style={[styles.container, containerStyle]}>
    <FormInput
      inputStyle={{ fontFamily: 'Pancake', fontSize: 26 }}
      placeholder={placeholder}
      onChangeText={onChangeText} />
  </View>
);
