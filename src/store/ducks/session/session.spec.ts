import { expect } from 'chai';

import * as session from './';

const state = {
  session: session.initialState,
};

const reducer = session.sessionSlice.reducer;

it('should select the session state', () => {
  const result = session.selectSession(state);
  expect(result).to.deep.equal(session.initialState);
});

it('should select the duration', () => {
  const result = session.selectDuration(state);
  expect(result).to.equal(session.initialState.duration);
});

it('should increment the duration', () => {
  const result = reducer(session.initialState, session.increment);
  expect(result).to.deep.equal({ duration: 1 });
});
