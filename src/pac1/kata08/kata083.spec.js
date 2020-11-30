import createTree from './kata083.js';

describe('Kata #8.3', () => {
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

  test('Ha d’existir un mètode getFruit', () => {
    expect('getFruit' in tree).toBe(true);
  });

  test('El resultat d’invocar el mètode getFruit sobre l’objecte creat prèviament ha de ser "apple"', () => {
    expect(tree.getFruit()).toBe('apple');
  });
});