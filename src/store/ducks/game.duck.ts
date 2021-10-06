import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
  words: string[];
  start: boolean;
  complete: boolean;
  timer: number;
}

const initialState: GameState = {
  words: [],
  start: false,
  complete: false,
  timer: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementTimer: (state) => {
      state.timer += 1;
    },
    setWords: (state, { payload }: PayloadAction<string[]>) => {
      state.words = payload;
    },
    beginGame: (state) => {
      state.start = true;
      state.complete = false;
    },
    endGame: (state) => {
      state.start = false;
      state.complete = true;
    },
    restartGame: (state) => {
      state.start = false;
      state.complete = false;
      state.timer = 0;
    },
  },
});

export const selectGame = ({ game }: { game: GameState }) => game;

export const selectTimer = createSelector(selectGame, ({ timer }) => timer);

export const { incrementTimer, setWords, beginGame, endGame, restartGame } = gameSlice.actions;

export default gameSlice.reducer;
