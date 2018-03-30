import { StyleSheet, Dimensions } from 'react-native';

import { COLOR } from '../../assets/const-styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  nullElement: {
    backgroundColor: COLOR.mainFour,
    height: 22,
  },
  loginHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 6,
    alignItems: 'center',
    width,
    backgroundColor: COLOR.mainTwo,
    shadowColor: COLOR.mainThree,
  },
});
