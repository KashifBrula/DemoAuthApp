import {createSlice} from '@reduxjs/toolkit';

// Initial state
const initialState = {
  counter: 0,
};

// Create counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Reducer for increment
    increment: state => {
      state.counter += 1;
    },
    // Reducer for decrement
    decrement: state => {
      state.counter = Math.max(state.counter - 1, 0);
    },

    clearCounter(state) {
      state.counter = 0;
    },
  },
});

// Export actions
export const {increment, decrement, clearCounter} = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
