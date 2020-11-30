import removeFirstAndLast from './kata04';

describe('Kata #4: removeFirstAndLast', () => {
  test('de "JavaScript" retorna "avaScrip"', () => {
    expect(removeFirstAndLast('JavaScript')).toBe('avaScrip');
  });

  test('de "Alexandria" retorna "lexandri"', () => {
    expect(removeFirstAndLast('Alexandria')).toBe('lexandri');
  });

  test('de "hydrogen" retorna "ydroge"', () => {
    expect(removeFirstAndLast('hydrogen')).toBe('ydroge');
  });

  test('de "ok" retorna "ok"', () => {
    expect(removeFirstAndLast('ok')).toBe('ok');
  });

  test('de "ok" retorna "ok"', () => {
    expect(removeFirstAndLast('ok')).toBe('ok');
  });
});
