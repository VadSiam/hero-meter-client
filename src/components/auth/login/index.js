import {
  compose,
  withProps,
} from 'recompose';
import LoginComponent from './login.js';

import {
  onAuthorizationUser,
} from '../../../api-store/auth/actions';


const Login = compose(
  withProps(props => ({
    ...props,
    onAuthorizationUser,
  })),
)(LoginComponent);

export default Login;
