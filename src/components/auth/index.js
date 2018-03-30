/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  // $FlowFixMe
} from 'react-native';
import Tabs from 'react-native-tabs';

import { Label } from '../common-components/label';
import { COLOR } from '../../assets/const-styles';
import Login from './login';
import SignUp from './signup';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white,
  },
  formContainer: {
    width,
    height: height / 2,
    backgroundColor: COLOR.mainFour,
    marginBottom: 5,
  },
  tabStyle: {
    backgroundColor: COLOR.mainFour,
    top: 20,
  },
  tabLabel: {
    fontSize: 20,
  },
  selectedStyle: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: COLOR.mainOne,
    backgroundColor: COLOR.mainThree,
  },
});

type Props = {

}
type State = {
  page: string
}

class Authorization extends Component <Props, State> {
  state = {
    page: 'login',
  }

  onChangeTab = (page: string) => this.setState({ page });

  render() {
    const { page } = this.state;
    return (
      <View style={styles.container}>
        <Tabs
          selected={page}
          style={styles.tabStyle}
          onSelect={element => this.onChangeTab(element.props.name)}>
          <View
            name="signup"
            selectedIconStyle={styles.selectedStyle}>
            <Label
              style={[styles.tabLabel]}
              label="Sign Up" />
          </View>
          <View
            name="login"
            selectedIconStyle={styles.selectedStyle}>
            <Label
              style={[styles.tabLabel]}
              label="Login" />
          </View>
          <View
            name="password"
            selectedIconStyle={styles.selectedStyle}>
            <Label
              style={[styles.tabLabel]}
              label="Forgot Password" />
          </View>
        </Tabs>
        {page === 'login' &&
          <View style={styles.formContainer}>
            <Login />
          </View>
        }
        {page === 'signup' &&
          <View style={styles.formContainer}>
            <SignUp />
          </View>
        }
      </View>
    );
  }
}

export default Authorization;
