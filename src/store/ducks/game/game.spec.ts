import { expect } from 'chai';

import * as game from './';

const state = {
  game: game.initialState,
};

const reducer = game.gameSlice.reducer;

it('should select the game state', () => {
  const result = game.selectGame(state);
  expect(result).to.equal(game.initialState);
});

it('should select the timer', () => {
  const result = game.selectTimer(state);
  expect(result).to.equal(game.initialState.timer);
});

it('should increment the timer', () => {
  const result = reducer(game.initialState, game.incrementTimer);
  expect(result).to.deep.equal({ ...game.initialState, timer: 1 });
});

it('should set words', () => {
  const result = reducer(game.initialState, game.setWords(['hello', 'world']));
  expect(result).to.deep.equal({ ...game.initialState, words: ['hello', 'world'] });
});

it('should begin the game', () => {
  const result = reducer({ ...game.initialState, start: false, complete: false }, game.beginGame);
  expect(result).to.deep.equal({ ...game.initialState, start: true, complete: false });
});

it('should end the game', () => {
  const result = reducer({ ...game.initialState, start: true, complete: false }, game.endGame);
  expect(result).to.deep.equal({ ...game.initialState, start: false, complete: true });
});

it('should restart the game', () => {
  const result = reducer({ ...game.initialState, start: true, complete: true, timer: 100 }, game.restartGame);
  expect(result).to.deep.equal({ ...game.initialState, start: false, complete: false, timer: 0 });
});
