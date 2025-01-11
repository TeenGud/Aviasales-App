import { createSlice } from '@reduxjs/toolkit';

interface WidgetsSlice {
  value: { сheap: boolean; fast: boolean; optimal: boolean };
}

const initialState: WidgetsSlice = {
  value: { сheap: true, fast: false, optimal: false },
};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    clickCheap: (state) => {
      state.value.сheap = true;
      state.value.fast = false;
      state.value.optimal = false;
    },
    clickFast: (state) => {
      state.value.сheap = false;
      state.value.fast = true;
      state.value.optimal = false;
    },
    clickOptimal: (state) => {
      state.value.сheap = false;
      state.value.fast = false;
      state.value.optimal = true;
    },
  },
  // extraReducers: (builder) => {
  //     builder
  //     .addCase(incrementAsync.pending, () => {
  //         console.log("IncrementAsync pending")
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
  //         state.value += action.payload
  //     })
  // }
});
// export const incrementAsync = createAsyncThunk(
//     "counter/incrementAsync",
//     async (amount: number) => {
//         await new Promise((resolve) => setTimeout(resolve, 1000))
//         return amount
//     }
// )
export const { clickCheap, clickFast, clickOptimal } = widgetsSlice.actions;
export default widgetsSlice.reducer;
