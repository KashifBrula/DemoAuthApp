import {persistReducer} from 'redux-persist';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Auth reducers
// import loginReducer from './authSlice/loginSlice';
// import registerReducer from './authSlice/registerSlice';

// Counter reducer
import counterReducer from './counterSlice/counterSlice';

const reducers = combineReducers({
  // auth
  // loginReducer,
  // registerReducer,

  // counter
  counterReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['counterReducer'],
  // whitelist: ['counterReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
