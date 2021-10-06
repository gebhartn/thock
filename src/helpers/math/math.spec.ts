import { expect } from 'chai';
import * as math from './';

it('should add one', () => {
  const result = math.addOne(1);

  expect(result).to.equal(2);
});

it('should curry', () => {
  const addTwo = math.add(2);

  const result = addTwo(2);

  expect(result).to.equal(4);
});
