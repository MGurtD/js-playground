import removeSpaces from './kata05';

describe('Kata #5: removeSpaces', () => {
  test('de "good morning" retorna "goodmorning"', () => {
    expect(removeSpaces('good morning')).toBe('goodmorning');
  });

  test('de " carrot cake " retorna "carrotcake"', () => {
    expect(removeSpaces(' carrot cake ')).toBe('carrotcake');
  });

  test('de "the abbot gave rice to the fox" retorna "theabbotgavericetothefox"', () => {
    expect(removeSpaces(' carrot cake ')).toBe('carrotcake');
  });
});
