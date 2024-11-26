import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementAmount: (state, action) => {
      state.count += action.payload;
    },
    getText: {
      reducer: (state, action) => {
        state.count += action.payload.strength;
      },
      prepare: (text, subtext) => {
        return {
          payload: {
            strength: text.length + subtext.length,
          },
        };
      },
    },
  },
});
export const getAllState = (state) => state.counter.count;
export const { increment, decrement, incrementAmount, getText } =
  counterSlice.actions;
export default counterSlice.reducer;
