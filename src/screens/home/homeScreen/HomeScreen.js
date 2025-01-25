import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

import {useDispatch, useSelector} from 'react-redux';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.authReducer);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Info</Text>
      <Text style={styles.infoText}>Username:{user?.username} </Text>
      <Text style={styles.infoText}>Name: {user?.name}</Text>
      <Text style={styles.infoText}>Email: {user?.email}</Text>
      <TouchableOpacity
        style={styles.logOut}
        onPress={() => navigation.navigate('StoreCleaner')}>
        <Text style={styles.logTxt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
