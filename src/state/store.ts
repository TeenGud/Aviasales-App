import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filters/filtersSlice.ts';
import widgetsReducer from './widgets/widgetsSlice.ts';
import ticketsReducer from './tickets/ticketsSlice.ts';

export const store = configureStore({
  reducer: { filters: filtersReducer, widgets: widgetsReducer, tickets: ticketsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
