import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

import {useDispatch, useSelector} from 'react-redux';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state?.counterReducer?.counter);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Info</Text>
      <Text style={styles.infoText}>User Name:kashif </Text>
      <Text style={styles.infoText}>Name: Muhammad Kashif</Text>
      <Text style={styles.infoText}>Email: kashif@mail.com</Text>
      <TouchableOpacity
        style={styles.logOut}
        onPress={() => navigation.navigate('StoreCleaner')}>
        <Text style={styles.logTxt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
