import { expect } from 'chai';
import * as formatting from './';

it('should format 0', () => {
  const result = formatting.toHumanTime(0);
  expect(result).to.equal('00:00:00');
});

it('should format seconds', () => {
  const result = formatting.toHumanTime(30);
  expect(result).to.equal('00:00:30');
});

it('should format minutes', () => {
  const result = formatting.toHumanTime(60);
  expect(result).to.equal('00:01:00');
});

it('should format hours', () => {
  const result = formatting.toHumanTime(60 * 60);
  expect(result).to.equal('01:00:00');
});

it('should format all places', () => {
  const result = formatting.toHumanTime(60 * 60 + 60 + 1);
  expect(result).to.equal('01:01:01');
});
