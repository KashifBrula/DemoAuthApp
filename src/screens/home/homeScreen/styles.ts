import {StyleSheet} from 'react-native';

import fonts from '../../../constants/fonts';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: fonts.InterBold,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: fonts.InterMedium,
  },
  logOut: {
    marginTop: 15,
  },
  logTxt: {
    fontSize: 20,
    color: colors.red,
    fontFamily: fonts.RalewayBold,
    textDecorationLine: 'underline',
  },
});
