import React from 'react';
import { StackNavigator } from 'react-navigation';

import Authorization from '../auth';
import { LoginLogo } from './header-decore';
import { onResetToken } from '../../api-store/auth/actions';


export const NonLoginNavigator = StackNavigator({
  auth: {
    screen: Authorization,
    navigationOptions: () => ({
      header: <LoginLogo onReset={onResetToken()} />,
    }),
  },
});
