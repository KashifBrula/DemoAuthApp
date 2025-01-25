import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  Keyboard,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {useStyles} from './styles';
import {AppButton, AppInput} from '../../components';

import colors from '../../constants/colors';
import {isValidEmail} from '../../constants/constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useSelector, useDispatch} from 'react-redux';
import {registerUser} from '../../redux/authSlice/authSlice';

export const SignUp = ({navigation}) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errMsgs, setErrMsgs] = useState({});
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleError = (error, input) => {
    setErrMsgs(errMsgs => ({...errMsgs, [input]: error}));
  };

  const {error} = useSelector(state => state.authReducer);

  useEffect(() => {
    Platform.OS == 'android' && StatusBar.setBackgroundColor(colors.theme);

    return () => {
      Platform.OS == 'android' && StatusBar.setBackgroundColor(colors.white);
    };
  }, []);

  const checkValidations = () => {
    Keyboard.dismiss();
    let isValid = true;

    const re = /^(?!.* )/;

    if (name?.trim() === '') {
      handleError('Name is required.', 'nameErrMsg');
      isValid = false;
    }

    if (userName?.trim() === '') {
      handleError('Username is required.', 'uNameErrMsg');
      isValid = false;
    }

    if (!email) {
      handleError('Email is required.', 'emailErrMessage');
      isValid = false;
    } else if (isValidEmail(email.trim()) === false) {
      handleError('Pleas enter a valid email.', 'emailErrMessage');
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
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    const body = {
      name: name.trim(),
      email: email.trim(),
      username: userName.trim(),
      password: password.trim(),
    };

    const res = await dispatch(registerUser(body));

    if (res.error) {
      Alert.alert('Registration Failed', res.error);
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
        <Text style={styles.heading}>Sign Up</Text>
      </View>

      <KeyboardAwareScrollView contentContainerStyle={styles.mainContainer}>
        <AppInput
          value={name}
          label={'Name'}
          required={true}
          placeholder={'John'}
          onChangeText={text => {
            handleError(null, 'nameErrMsg');
            setName(text);
          }}
          error={errMsgs.nameErrMsg || false}
        />
        <AppInput
          required={true}
          value={userName}
          label={'User Name'}
          autoCapitalize="none"
          placeholder={'john'}
          onChangeText={text => {
            handleError(null, 'uNameErrMsg');
            setUserName(text);
          }}
          error={errMsgs.uNameErrMsg || false}
        />
        <AppInput
          value={email}
          label={'Email'}
          required={true}
          placeholder={'test@mail.com'}
          autoCapitalize={'none'}
          onChangeText={text => {
            handleError(null, 'emailErrMessage');
            setEmail(text);
          }}
          error={errMsgs.emailErrMessage || false}
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
          title="Sign Up"
          onPress={checkValidations}
          buttonStyle={{marginTop: 30}}
        />
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
