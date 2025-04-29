import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      console.log('Redux Action: increment - Previous state:', state.value);
      state.value += 1;
      console.log('Redux Action: increment - New state:', state.value);
    },
    decrement: (state) => {
      console.log('Redux Action: decrement - Previous state:', state.value);
      state.value -= 1;
      console.log('Redux Action: decrement - New state:', state.value);
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log('Redux Action: incrementByAmount - Previous state:', state.value, 'Amount:', action.payload);
      state.value += action.payload;
      console.log('Redux Action: incrementByAmount - New state:', state.value);
    },
    reset: (state) => {
      console.log('Redux Action: reset - Previous state:', state.value);
      state.value = 0;
      console.log('Redux Action: reset - New state:', state.value);
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Selectors
export const selectCount = (state: { counter: CounterState }) => {
  console.log('Redux Selector: selectCount - Current state:', state.counter.value);
  return state.counter.value;
};
export const selectStatus = (state: { counter: CounterState }) => state.counter.status;

export default counterSlice.reducer; 