// src/features/auth/authSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  users: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    logout: state => {
      state.user = null;
    },
  },
});

// Register user
export const registerUser = payload => async (dispatch, getState) => {
  try {
    const {users} = getState()?.authReducer;

    if (users.some(user => user.username === payload?.username)) {
      return {error: 'Username already exists'};
    }

    dispatch(addUser(payload));
    dispatch(setUser(payload));
    return {user: payload};
  } catch (error) {
    return {error: error.message};
  }
};

// Log in user
export const loginUser = (username, password) => async (dispatch, getState) => {
  try {
    const {users} = getState()?.authReducer;

    const user = users.find(user => user.username === username);
    if (!user) {
      return {error: 'User not found'};
    }

    // Check if the password matches
    if (user.password !== password) {
      return {error: 'Incorrect password'};
    }

    dispatch(setUser(user));
    return {user};
  } catch (error) {
    return {error: error.message};
  }
};

// Export actions
export const {setUser, setError, clearError, logout, addUser} =
  authSlice.actions;

// Export reducer
export default authSlice.reducer;
