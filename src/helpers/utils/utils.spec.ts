import { expect } from 'chai';
import * as utils from './';

it('should apply a function', () => {
  const double = (n: number) => n * 2;

  const result = utils.apply(2, double);
  expect(result).to.equal(4);
});

it('should compose multiple functions of single parity', () => {
  const addOne = (n: number) => n + 1;
  const double = (n: number) => n * 2;
  const fn = utils.compose(double, addOne);

  const result = fn(2);
  expect(result).to.equal(6);
});
