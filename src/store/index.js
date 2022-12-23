import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counterData",
  initialState: { counterValue: 0 },
  reducers: {
    incremnet: (state, action) => {
      return { counterValue: state.counterValue + 1 };
    },
    decrement: (state, action) => {
      return { counterValue: state.counterValue - 1 };
    },
    incremnetby10: (state, action) => {
      return { counterValue: state.counterValue + action.payload };
    },
    reset: (state, action) => {
      return { counterValue: 0 };
    },
  },
});
export const { incremnet, decrement, incremnetby10, reset } =
  counterSlice.actions;
console.log(counterSlice.actions);
export default counterSlice.reducer;
