/* @flow weak */

import React from 'react';
import { Button } from 'react-native-elements';
import { COLOR } from '../../assets/const-styles';

type Props = {
  title?: string,
  onPress?: () => void,
  borderRadius?: number,
  backgroundColor?: string,
  fontSize?: number,
};

export const SimpleButton = ({
  title,
  onPress,
  borderRadius,
  backgroundColor,
  fontSize,
}: Props) => (
  <Button
    onPress={onPress}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
    fontSize={fontSize}
    fontFamily="Pancake"
    title={title} />
);

SimpleButton.defaultProps = {
  title: 'BUTTON',
  onPress: null,
  borderRadius: 6,
  backgroundColor: COLOR.mainOne,
  fontSize: 24,
};
