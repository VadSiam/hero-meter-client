import { compose, withProps } from 'recompose';
import RouterComponent from './router';

import {
  onRegisteredNewUser,
  onAuthorizationUser,
  onGetToken,
} from '../../api-store/auth/actions';


const Router = compose(
  withProps(props => ({
    ...props,
    onRegisteredNewUser,
    onAuthorizationUser,
    onGetToken,
  })),
)(RouterComponent);

export default Router;
