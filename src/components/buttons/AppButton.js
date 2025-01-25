import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

export const AppButton = ({
  title,
  bgColor,
  onPress,
  iconLeft,
  textStyle,
  iconStyle,
  buttonStyle,
  loading = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        buttonStyle,
        {backgroundColor: bgColor || colors.theme},
      ]}
      {...props}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" style={styles.spinner} />
      ) : (
        <View style={styles.content}>
          {iconLeft && (
            <Image source={iconLeft} style={[styles.icon, iconStyle]} />
          )}

          <Text style={[styles.text, textStyle]} numberOfLines={1}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: '100%',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.RalewaySemiBold,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  spinner: {
    marginHorizontal: 10,
  },
});
