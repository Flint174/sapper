import { configureStore } from "@reduxjs/toolkit";
import { fieldCellsReducer } from "./slices/field-cells-slice";

export const store = configureStore({
  reducer: { fieldCells: fieldCellsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
