import repeatString from './kata03';

describe('Kata #3: repeatString', () => {
  test('"JavaScript" 0 vegades es ""', () => {
    expect(repeatString('JavaScript', 0)).toBe('');
  });

  test('"university" 1 vegada es "university"', () => {
    expect(repeatString('university', 1)).toBe('university');
  });

  test('"hello" 3 vegades es "hellohellohello"', () => {
    expect(repeatString('hello', 3)).toBe('hellohellohello');
  });

  test('"?" 10 vegades es "??????????"', () => {
    expect(repeatString('?', 10)).toBe('??????????');
  });

  test('"life" -2 vegades es ""', () => {
    expect(repeatString('life', -2)).toBe('');
  });

  test('undefined -2 vegades es ""', () => {
    expect(repeatString(undefined, -2)).toBe('');
  });

  test('"backmatters" undefined vegades es ""', () => {
    expect(repeatString('backmatters', undefined)).toBe('');
  });
});
