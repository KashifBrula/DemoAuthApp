import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Info</Text>
      <Text style={styles.infoText}>User Name:kashif </Text>
      <Text style={styles.infoText}>Name: Muhammad Kashif</Text>
      <Text style={styles.infoText}>Email: kashif@mail.com</Text>
      <TouchableOpacity
        style={styles.logOut}
        onPress={() => navigation.replace('SignIn')}>
        <Text style={styles.logTxt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
