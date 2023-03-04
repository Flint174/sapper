import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GameStatus = "newGame" | "inProgress" | "gameOver" | "victory";
export interface Player {
  time: number;
  timer: NodeJS.Timer | null;
  status: GameStatus;
}

const playerInitialState: Player = {
  status: "newGame",
  time: 0,
  timer: null,
};

const stopTimer = (timer: NodeJS.Timer | null) => {
  if (timer !== null) clearInterval(timer);
};

export const playerSlice = createSlice({
  name: "player",
  initialState: playerInitialState,
  reducers: {
    newPlayer: ({ timer }) => {
      stopTimer(timer);
      return playerInitialState;
    },
    setStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload;
    },
    setTimer: (state, action: PayloadAction<NodeJS.Timer>) => {
      state.timer = action.payload;
    },
    incTime: (state) => {
      state.time++;
    },
    gameOver: (state) => {
      stopTimer(state.timer);
      state.status = "gameOver";
    },
    victory: (state) => {
      stopTimer(state.timer);
      state.status = "victory";
    },
  },
});

export const { newPlayer, setStatus, setTimer, incTime, gameOver, victory } =
  playerSlice.actions;
export const playerReducer = playerSlice.reducer;
