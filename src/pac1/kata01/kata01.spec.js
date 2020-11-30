import evenOdd from './kata01';

describe('Kata #1: evenOdd', () => {
  test('de 0 es Even', () => {
    expect(evenOdd(0)).toBe('Even');
  });

  test('de 1 es Odd', () => {
    expect(evenOdd(1)).toBe('Odd');
  });

  test('de 2 es Even', () => {
    expect(evenOdd(2)).toBe('Even');
  });

  test('de 3 es Odd', () => {
    expect(evenOdd(3)).toBe('Odd');
  });
});
