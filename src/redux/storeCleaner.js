import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {clearLocal} from '../boot/rootNavigation';

import {logout} from './authSlice/authSlice';
import {clearCounter} from './counterSlice/counterSlice';

export const StoreCleaner = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    reduxClear();
    clearLocal();
    navigation?.replace('AuthStack');

    setTimeout(async () => {
      // Any api call befor logout
    }, 500);
  }, []);

  const reduxClear = async () => {
    dispatch(logout());
    dispatch(clearCounter());
  };

  return null;
};
