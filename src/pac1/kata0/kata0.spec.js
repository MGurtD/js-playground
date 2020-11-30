import sumatori from './kata0';

describe('Kata #0: sumatori', () => {
  test('de 2 es 3', () => {
    expect(sumatori(2)).toBe(3);
  });

  test('de 3 es 6', () => {
    expect(sumatori(3)).toBe(6);
  });
});
