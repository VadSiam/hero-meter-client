/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  // $FlowFixMe
} from 'react-native';
import { FormInput } from 'react-native-elements';

import { MAIN_FONT } from '../../assets/const-styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

type State = {};
type Props = {
  onChangeText: () => void,
  placeholder: string,
  containerStyle?: Object,
  clear: boolean,
};
type NextProps = {
  clear: boolean,
}

export default class Input extends Component<Props, State> {
  state = {}

  input: any;

  onClearField = () => this.input.clearText();

  componentWillReceiveProps({ clear }: NextProps) {
    if (clear) this.onClearField();
  }

  render() {
    const {
      onChangeText,
      placeholder,
      containerStyle,
    } = this.props;


    return (
      <View style={[styles.container, containerStyle]}>
        <FormInput
          ref={input => { this.input = input; }}
          inputStyle={{ fontFamily: MAIN_FONT, fontSize: 26 }}
          placeholder={placeholder}
          autoCapitalize="none"
          onChangeText={onChangeText} />
      </View>
    );
  }
}
