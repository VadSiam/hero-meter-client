/* @flow */

import React from 'react';
import {
  View,
  StyleSheet,
  // $FlowFixMe
} from 'react-native';
import { FormInput } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});


type Props = {
  onChangeText: () => void,
  placeholder: string,
  containerStyle?: Object,
};


export const Input = ({
  onChangeText,
  placeholder,
  containerStyle,
}: Props) => (
  <View style={[styles.container, containerStyle]}>
    <FormInput
      inputStyle={{ fontFamily: 'Pancake', fontSize: 26 }}
      placeholder={placeholder}
      autoCapitalize="none"
      onChangeText={onChangeText} />
  </View>
);

Input.defaultProps = {
  containerStyle: {},
};
