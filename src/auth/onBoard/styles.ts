import {Dimensions, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

const {width, height} = Dimensions.get('window');

export const useStyles = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.white,
    },
    topSection: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: '3%',
      justifyContent: 'space-between',
      marginTop: insets.top + height * 0.01,
    },
    infoTxt: {
      fontSize: 24,
      color: colors.black,
      fontFamily: fonts.RalewaySemiBold,
    },
    listSection: {
      width: height * 0.36,
      height: height * 0.38,
      marginTop: height * 0.05,
    },
    slide: {
      borderRadius: 24,
      alignItems: 'center',
      width: height * 0.36,
      backgroundColor: colors.lightGrey,
    },
    image: {
      borderRadius: 24,
      width: height * 0.36,
      height: height * 0.38,
      resizeMode: 'cover',
    },
    pagination: {
      marginTop: 15,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dot: {
      width: 8,
      height: 8,
      marginRight: 5,
      borderRadius: 5,
    },
    button: {
      zIndex: 999,
      padding: 10,
      position: 'absolute',
      bottom: insets.bottom,
    },
    skipTxt: {
      fontSize: 16,
      fontFamily: fonts.RalewaySemiBold,
    },
    heading: {
      fontSize: 36,
      color: colors.black,
      marginTop: height * 0.06,
      fontFamily: fonts.RalewayBold,
    },
    subTitle: {
      fontSize: 16,
      color: colors.black,
      marginTop: height * 0.001,
      fontFamily: fonts.RalewayRegular,
    },
  });
};
