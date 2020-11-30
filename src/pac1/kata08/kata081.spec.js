import createTree from './kata081.js';

describe('Kata #8.1', () => {
  let tree = createTree();

  test('Ha de tenir una propietat species i una fruit', () => {
    expect('species' in tree).toBe(true);
    expect('fruit' in tree).toBe(true);
  });

  test('El valor de la propietat species ha de ser appleTree', () => {
    expect(tree.species).toBe('appleTree');
  });

  test('El valor de la propietat fruit ha de ser apple', () => {
    expect(tree.fruit).toBe('apple');
  });
});