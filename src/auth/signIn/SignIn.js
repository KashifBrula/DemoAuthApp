import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  Platform,
  Keyboard,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {useStyles} from './styles';
import {AppButton, AppInput} from '../../components';

import colors from '../../constants/colors';
import {useIsFocused} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useDispatch} from 'react-redux';
import {loginUser} from '../../redux/authSlice/authSlice';

export const SignIn = ({navigation}) => {
  const styles = useStyles();
  const focused = useIsFocused();
  const dispatch = useDispatch();

  const [errMsgs, setErrMsgs] = useState({});
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleError = (error, input) => {
    setErrMsgs(errMsgs => ({...errMsgs, [input]: error}));
  };

  useEffect(() => {
    Platform.OS == 'android' && StatusBar.setBackgroundColor(colors.theme);

    return () => {
      Platform.OS == 'android' && StatusBar.setBackgroundColor(colors.white);
    };
  }, [focused]);

  const checkValidations = () => {
    Keyboard.dismiss();
    let isValid = true;

    const re = /^(?!.* )/;

    if (userName?.trim() === '') {
      handleError('Username is required.', 'nameErrMsg');
      isValid = false;
    }

    if (!password) {
      handleError('Password is required.', 'passwordErrMsg');
      isValid = false;
    } else if (re.test(password) == false) {
      handleError("Password can't contain empty spaces.", 'passwordErrMsg');
      isValid = false;
    } else if (password.length < 6) {
      handleError(
        'Password length must be at least 6 characters.',
        'passwordErrMsg',
      );
      isValid = false;
    }

    if (isValid) {
      signInUser();
    }
  };

  const signInUser = async () => {
    const res = await dispatch(loginUser(userName, password));

    if (res.error) {
      Alert.alert('Login Failed', res.error);
    } else {
      navigation.navigate('HomeStack');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          style={styles.image}
          source={{uri: 'https://picsum.photos/1000/1000'}}
        />
        <Text style={styles.heading}>Sign In</Text>
      </View>

      <KeyboardAwareScrollView contentContainerStyle={styles.mainContainer}>
        <AppInput
          required={true}
          value={userName}
          label={'User Name'}
          autoCapitalize="none"
          placeholder={'john'}
          onChangeText={text => {
            handleError(null, 'nameErrMsg');
            setUserName(text);
          }}
          error={errMsgs.nameErrMsg || false}
        />
        <AppInput
          isPass={true}
          maxLength={25}
          value={password}
          required={true}
          label={'Password'}
          showPass={showPass}
          placeholder={'******'}
          secureTextEntry={!showPass}
          togglePass={() => setShowPass(!showPass)}
          onChangeText={text => {
            handleError(null, 'passwordErrMsg');
            setPassword(text);
          }}
          error={errMsgs.passwordErrMsg || false}
        />
        <AppButton
          title="Sign In"
          onPress={checkValidations}
          buttonStyle={{marginTop: 30}}
        />
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation?.navigate('SignUp')}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
