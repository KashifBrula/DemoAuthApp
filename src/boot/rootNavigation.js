import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function clearLocal() {
  await AsyncStorage.removeItem('userId');
}
