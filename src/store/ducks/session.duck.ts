import { createSlice, createSelector } from '@reduxjs/toolkit';

export interface SessionState {
  duration: number;
}

const initialState: SessionState = {
  duration: 0,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    increment: (state) => {
      state.duration += 1;
    },
  },
});

const selectSession = ({ session }: { session: SessionState }) => session;

export const selectDuration = createSelector(selectSession, ({ duration }) => {
  return duration;
});

export const { increment } = sessionSlice.actions;

export default sessionSlice.reducer;
