import { createSlice } from '@reduxjs/toolkit';

interface FiltersSlice {
  value: { all: boolean; noTransfer: boolean; oneTransfer: boolean; twoTransfers: boolean; threeTransfers: boolean };
}

const initialState: FiltersSlice = {
  value: { all: false, noTransfer: false, oneTransfer: false, twoTransfers: false, threeTransfers: false },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleAll: (state) => {
      if (!state.value.all) {
        state.value = { all: true, noTransfer: true, oneTransfer: true, twoTransfers: true, threeTransfers: true };
      } else if (state.value.all)
        state.value = { all: false, noTransfer: false, oneTransfer: false, twoTransfers: false, threeTransfers: false };
    },
    toggleNoTransfer: (state) => {
      if (state.value.noTransfer) {
        state.value.all = false;
      } else if (
        !state.value.noTransfer &&
        state.value.oneTransfer &&
        state.value.twoTransfers &&
        state.value.threeTransfers
      ) {
        state.value.all = true;
      }
      state.value.noTransfer = !state.value.noTransfer;
    },
    toggleOneTransfer: (state) => {
      if (state.value.oneTransfer) {
        state.value.all = false;
      } else if (
        !state.value.oneTransfer &&
        state.value.noTransfer &&
        state.value.twoTransfers &&
        state.value.threeTransfers
      ) {
        state.value.all = true;
      }
      state.value.oneTransfer = !state.value.oneTransfer;
    },
    toggleTwoTransfers: (state) => {
      if (state.value.twoTransfers) {
        state.value.all = false;
      } else if (
        !state.value.twoTransfers &&
        state.value.oneTransfer &&
        state.value.noTransfer &&
        state.value.threeTransfers
      ) {
        state.value.all = true;
      }
      state.value.twoTransfers = !state.value.twoTransfers;
    },
    toggleThreeTransfers: (state) => {
      if (state.value.threeTransfers) {
        state.value.all = false;
      } else if (
        !state.value.threeTransfers &&
        state.value.oneTransfer &&
        state.value.twoTransfers &&
        state.value.noTransfer
      ) {
        state.value.all = true;
      }
      state.value.threeTransfers = !state.value.threeTransfers;
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
export const { toggleAll, toggleNoTransfer, toggleOneTransfer, toggleTwoTransfers, toggleThreeTransfers } =
  filtersSlice.actions;
export default filtersSlice.reducer;
