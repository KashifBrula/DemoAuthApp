import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

//local imports
import App from './app';

const Setup = () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};

export default Setup;
