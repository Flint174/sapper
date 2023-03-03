import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldCell } from "../../utils/cell-types";
import { FieldDimentions, MINES_AMOUNT } from "../../utils/game-config";

const length = FieldDimentions.HEIGHT * FieldDimentions.WIDTH;
const fieldCellsInitialState: FieldCell[] = Array.from(
  { length },
  (_, index) => ({
    index,
    type: "empty",
    show: "hide",
    block: "none",
  })
);

export const fieldCellsSlice = createSlice({
  name: "filedCells",
  initialState: fieldCellsInitialState,
  reducers: {
    newGame: () => fieldCellsInitialState,
    generateMines: (state) => {
      const mines = new Set<number>();
      while (mines.size < MINES_AMOUNT) {
        mines.add(Math.floor(Math.random() * length));
      }
      mines.forEach((mine) =>
        state.splice(mine, 1, {
          index: mine,
          type: "mine",
          show: "hide",
          block: "none",
        })
      );
    },
    showCell: (state, action: PayloadAction<FieldCell>) => {
      const { payload: cell } = action;

      if (cell.block !== "none") return state;

      state.splice(cell.index, 1, { ...cell, show: "show" });
    },
    blockCell: (state, action: PayloadAction<FieldCell>) => {
      const { payload: cell } = action;

      if (cell.show !== "hide") return state;

      state.splice(cell.index, 1, {
        ...cell,
        block:
          cell.block === "none" ? "flag" : cell.block === "flag" ? "?" : "none",
      });
    },
  },
});

export const { newGame, generateMines, showCell, blockCell } =
  fieldCellsSlice.actions;
export const fieldCellsReducer = fieldCellsSlice.reducer;
