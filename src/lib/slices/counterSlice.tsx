import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 0,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    },
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      if (state.count === 0) return;
      state.count -= 1;
    },
    reset(state, action: PayloadAction<number>) {
      if (action.payload < 0) return;
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, reset, initCounterState } =
  counterSlice.actions;

export default counterSlice.reducer;
