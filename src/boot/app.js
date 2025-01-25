import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OnBoard, SignUp, SignIn} from '../auth';
import {HomeStack} from './homeStack/HomeStack';

const StackApp = createNativeStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
  animationEnabled: false,
});

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <StackApp.Navigator
          detachInactiveScreens={false}
          initialRouteName="OnBoard">
          <StackApp.Screen
            name="OnBoard"
            component={OnBoard}
            options={navOptionHandler}
          />
          <StackApp.Screen
            name="SignUp"
            component={SignUp}
            options={navOptionHandler}
          />
          <StackApp.Screen
            name="SignIn"
            component={SignIn}
            options={navOptionHandler}
          />
          <StackApp.Screen
            name="HomeStack"
            component={HomeStack}
            options={navOptionHandler}
          />
        </StackApp.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default App;
