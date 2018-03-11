/* @flow weak */

import React from 'react';
import { Button } from 'react-native-elements';

export const SimpleButton = ({
  title = 'BUTTON',
  onPress,
  borderRadius = 6,
  backgroundColor = '#4CAF50',
  fontSize = 24,
}) => (
  <Button
    onPress={onPress}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
    fontSize={fontSize}
    fontFamily="Pancake"
    title={title} />
);
