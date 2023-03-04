import { configureStore } from "@reduxjs/toolkit";
import { fieldCellsReducer } from "./slices/field-cells-slice";
import { playerReducer } from "./slices/player-slice";

export const store = configureStore({
  reducer: { fieldCells: fieldCellsReducer, player: playerReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
