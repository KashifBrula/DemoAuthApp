import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn, SignUp} from '../../auth';

const StackAuth = createNativeStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
  animationEnabled: false,
});

export const AuthStack = () => {
  return (
    <StackAuth.Navigator initialRouteName="SignIn">
      <StackAuth.Screen
        name="SignIn"
        component={SignIn}
        options={navOptionHandler}
      />
      <StackAuth.Screen
        name="SignUp"
        component={SignUp}
        options={navOptionHandler}
      />
    </StackAuth.Navigator>
  );
};
