import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchId } from '../../utils/handleEvents';
import { searchTickets } from '../../utils/fetch';
import { sortTickets } from '../../utils/tools';
import { listOfTickets } from '../../types/types';

interface TicketSlice {
  allTickets: listOfTickets | [];
  status: string | null;
  error: string | null;
}

const initialState: TicketSlice = {
  allTickets: [],
  status: null,
  error: null,
};

const filtersSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    changeAllTickets: (state, action: PayloadAction<[]>) => {
      state.allTickets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action: PayloadAction<[]>) => {
        state.status = 'resolve';
        state.allTickets = sortTickets(action.payload, 'cheap') as [] | listOfTickets;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload as string;
      });
  },
});
export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { rejectWithValue }) => {
  try {
    const tickets = await searchTickets(searchId);
    return tickets.tickets;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const { changeAllTickets } = filtersSlice.actions;
export default filtersSlice.reducer;
