import {Dimensions, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const {width, height} = Dimensions.get('window');

export const useStyles = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    topSection: {
      marginBottom: 40,
      alignItems: 'center',
      height: height * 0.35,
      justifyContent: 'center',
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      backgroundColor: colors.theme,
    },
    image: {
      marginTop: 20,
      borderRadius: 100,
      width: height * 0.14,
      height: height * 0.14,
      backgroundColor: colors.lightGrey,
    },
    mainContainer: {
      width: '90%',
      alignSelf: 'center',
    },
    heading: {
      fontSize: 24,
      marginTop: 25,
      textAlign: 'center',
      color: colors.white,
      fontFamily: fonts.RalewayBold,
    },
    infoSection: {
      marginTop: 10,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    infoText: {
      fontSize: 14,
      fontFamily: fonts.InterRegular,
    },
    btnText: {
      fontSize: 14,
      marginLeft: 2,
      fontFamily: fonts.RalewaySemiBold,
    },
  });
};
