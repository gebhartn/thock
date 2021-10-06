import { configureStore } from '@reduxjs/toolkit';
import { preloadedState } from './preload';
import session from './ducks/session.duck';
import game from './ducks/game.duck';

export const store = configureStore({
  reducer: {
    session,
    game,
  },
  preloadedState,
});

store.subscribe(() => {
  const { game } = store.getState();
  localStorage.setItem('thock-game-options', JSON.stringify(game));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
