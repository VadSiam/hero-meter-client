// @flow

import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { SimpleButton } from '../common-components/button';

import styles from './styles';

const doNothing = () => {};

type Props = {
  onReset: () => void;
}

export const LoginLogo = ({ onReset }: Props) => (
  <View>
    <View style={styles.nullElement} />
    <View style={styles.loginHeaderContainer} >
      <SimpleButton
        title="HERO METER"
        onPress={doNothing} />
      <SimpleButton
        title="#"
        onPress={onReset} />
    </View>

  </View>
);
