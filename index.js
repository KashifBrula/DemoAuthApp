/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Setup from './src/boot/setup';

AppRegistry.registerComponent(appName, () => Setup);
