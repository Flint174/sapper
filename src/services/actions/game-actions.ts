import { createAsyncThunk } from "@reduxjs/toolkit";
import { FieldCell } from "../../utils/cell-types";
import { generateField } from "../slices/field-cells-slice";
import { incTime, setStatus, setTimer } from "../slices/player-slice";
import type { AppDispatch, RootState } from "../index";

export const startGame = createAsyncThunk<
  void,
  FieldCell,
  { state: RootState; dispatch: AppDispatch }
>("startGame", (cell, { dispatch, getState }) => {
  dispatch(generateField(cell));
  dispatch(setStatus("inProgress"));
  dispatch(
    setTimer(
      setInterval(() => {
        dispatch(incTime());
      }, 1000)
    )
  );
});
