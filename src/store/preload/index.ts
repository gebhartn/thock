import type { GameState } from '../ducks/game';

const gameOptions = localStorage.getItem('thock-game-options');
const savedState = gameOptions ? JSON.parse(gameOptions) : {};

export const preloadedState = {
  game: {
    words: savedState.words,
    timer: savedState.timer,
  } as GameState,
};
