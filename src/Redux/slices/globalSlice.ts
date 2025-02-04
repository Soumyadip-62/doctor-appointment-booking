import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  openSidebar: boolean;
}

const initialState: CounterState = { value: 0, openSidebar: false };

const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    toggleSidebar: (state) => {
      state.openSidebar = !state.openSidebar;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, toggleSidebar } = globalSlice.actions;
export default globalSlice.reducer;
