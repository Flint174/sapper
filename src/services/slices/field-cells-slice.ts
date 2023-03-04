import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlockType, FieldCell } from "../../utils/cell-types";
import {
  FieldDimentions,
  FIELD_SIZE,
  MINES_AMOUNT,
} from "../../utils/game-config";

const fieldCellsInitialState: FieldCell[] = Array.from(
  { length: FIELD_SIZE },
  (_, index) => ({
    index,
    type: "empty",
    show: "hide",
    block: "none",
  })
);
const getMatrix = (index: number) => {
  return [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ]
    .map((el) => {
      const vOffset = index + el[1] * FieldDimentions.WIDTH;
      const hOffset = (vOffset % FieldDimentions.WIDTH) + el[0];
      const lineOffset = index + el[1] * FieldDimentions.WIDTH + el[0];
      return hOffset < FieldDimentions.WIDTH &&
        hOffset >= 0 &&
        vOffset >= 0 &&
        lineOffset < FIELD_SIZE
        ? lineOffset
        : -1;
    })
    .filter((el) => el > -1);
};

export const fieldCellsSlice = createSlice({
  name: "filedCells",
  initialState: fieldCellsInitialState,
  reducers: {
    newField: () => fieldCellsInitialState,
    generateField: (state, action: PayloadAction<FieldCell>) => {
      const { payload: cell } = action;
      const newState: FieldCell[] = state.slice();
      // generate mines
      const mines = new Set<number>([cell.index]);
      while (mines.size <= MINES_AMOUNT) {
        mines.add(Math.floor(Math.random() * FIELD_SIZE));
      }
      mines.delete(cell.index);
      mines.forEach(
        (mine) =>
          (newState[mine] = {
            index: mine,
            type: "mine",
            show: "hide",
            block: "none",
          })
      );
      // generate numbers
      mines.forEach((el) => {
        const matrix = getMatrix(el);
        matrix.forEach((item) => {
          const cell = newState[item];
          if (cell.type === "empty") {
            newState[item] = { ...cell, type: "number", value: 1 };
          } else if (cell.type === "number") {
            newState[item] = { ...cell, value: cell.value + 1 };
          }
        });
      });

      return newState;
    },
    showCell: (state, action: PayloadAction<FieldCell>) => {
      const { payload: cell } = action;

      if (cell.block !== "none") return state;

      if (cell.type !== "empty") {
        state.splice(cell.index, 1, { ...cell, show: "show" });
        return;
      }

      const newState: FieldCell[] = state.slice();

      let shapeMatrix = new Set<number>([cell.index]);

      do {
        shapeMatrix.forEach(
          (item) => (newState[item] = { ...newState[item], show: "show" })
        );
        const matrix = [];
        for (const i of Array.from(shapeMatrix).filter(
          (item) => newState[item].type === "empty"
        )) {
          matrix.push(
            ...getMatrix(i).filter(
              (el) =>
                newState[el].block === "none" &&
                newState[el].type !== "mine" &&
                newState[el].show === "hide"
            )
          );
          console.log({ index: cell.index, matrix });
        }

        shapeMatrix = new Set<number>(matrix);
      } while (shapeMatrix.size);

      return newState;
    },
    blockCell: (
      state,
      action: PayloadAction<{ cell: FieldCell; value: BlockType }>
    ) => {
      const {
        payload: { cell, value },
      } = action;

      if (cell.show !== "hide") return state;

      state.splice(cell.index, 1, {
        ...cell,
        block:
          //   cell.block === "none" ? "flag" : cell.block === "flag" ? "?" : "none",
          value,
      });
    },
    blockCells: (
      state,
      action: PayloadAction<{ cells: FieldCell[]; value: BlockType }>
    ) => {
      const {
        payload: { cells, value },
      } = action;

      const newState = state.slice();

      cells.forEach((cell) => {
        if (cell.show === "hide") {
          newState[cell.index] = { ...newState[cell.index], block: value };
        }
      });

      return newState;
    },
    revealMines: (state) => {
      return state.map((el) =>
        el.type === "mine" && el.block === "none" && el.show === "hide"
          ? { ...el, show: "reveal" }
          : el
      );
    },
  },
});

export const {
  newField,
  generateField,
  showCell,
  blockCell,
  blockCells,
  revealMines,
} = fieldCellsSlice.actions;
export const fieldCellsReducer = fieldCellsSlice.reducer;
