import {
  compose,
  withProps,
} from 'recompose';
import SignUpComponent from './signup.js';

import {
  onRegisteredNewUser,
} from '../../../api-store/auth/actions';


const SignUp = compose(
  withProps(props => ({
    ...props,
    onRegisteredNewUser,
  })),
)(SignUpComponent);

export default SignUp;
