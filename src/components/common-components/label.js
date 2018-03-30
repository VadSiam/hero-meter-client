import React from 'react';
import { Text } from 'react-native';

import { MAIN_FONT } from '../../assets/const-styles';

const font = { fontFamily: MAIN_FONT };

type Props = {
  label: string,
  style?: [],
  wrapCount?: number,
}

export const Label = ({ label, style, wrapCount }: Props) => (
  <Text style={[font, ...style]} numberOfLines={wrapCount}>
    {label}
  </Text>
);

Label.defaultProps = {
  style: [],
  wrapCount: 1,
};

export default Label;
