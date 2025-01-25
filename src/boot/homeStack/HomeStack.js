import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StackApp = createNativeStackNavigator();

import {HomeScreen} from '../../screens/home';
import {StoreCleaner} from '../../redux/storeCleaner';

const navOptionHandler = () => ({
  headerShown: false,
  animationEnabled: false,
});

export const HomeStack = () => {
  return (
    <StackApp.Navigator initialRouteName="HomeScreen">
      <StackApp.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="StoreCleaner"
        component={StoreCleaner}
        options={navOptionHandler}
      />
    </StackApp.Navigator>
  );
};
