import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import fonts from '../../constants/fonts';
import colors from '../../constants/colors';
import {ErrorMessage} from './ErrorMessage';

import Feather from 'react-native-vector-icons/Feather';

export const AppInput = props => {
  const {
    label,
    error,
    style,
    isPass,
    required,
    showPass,
    togglePass,
    placeholder,
    ...resetProps
  } = props;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.topSection}>
        <Text style={styles.labelStyle}>{label}</Text>
        {required ? <Text style={styles.reqTxt}>*</Text> : null}
      </View>
      <View style={styles.inputSection}>
        <TextInput
          {...resetProps}
          returnKeyType={
            props?.keyboardType == 'numeric' || 'number-pad'
              ? 'done'
              : undefined
          }
          style={styles.input}
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
        />
        {isPass && (
          <TouchableOpacity onPress={togglePass}>
            <Feather
              size={18}
              color={colors.black}
              name={showPass ? 'eye-off' : 'eye'}
            />
          </TouchableOpacity>
        )}
      </View>

      <ErrorMessage error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
    alignSelf: 'center',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reqTxt: {
    fontSize: 16,
    color: colors.red,
    fontFamily: fonts.InterMedium,
  },
  inputSection: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderColor: colors.lightGrey,
    justifyContent: 'space-between',
  },
  labelStyle: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.black,
    fontFamily: fonts.InterMedium,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: '100%',
    color: colors.black,
    fontFamily: fonts.InterRegular,
  },
});
