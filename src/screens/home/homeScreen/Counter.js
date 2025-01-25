import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {increment} from '../../../redux/counterSlice/counterSlice';
import {decrement} from '../../../redux/counterSlice/counterSlice';

import {useDispatch, useSelector} from 'react-redux';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state?.counterReducer?.counter);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Counter Example Redux</Text>

      <TouchableOpacity
        style={styles.logOut}
        onPress={() => dispatch(increment())}>
        <Text style={styles.logTxt}>Plus</Text>
      </TouchableOpacity>
      <Text>{counter}</Text>
      <TouchableOpacity
        style={styles.logOut}
        onPress={() => dispatch(decrement())}>
        <Text style={styles.logTxt}>Minus</Text>
      </TouchableOpacity>
    </View>
  );
};
