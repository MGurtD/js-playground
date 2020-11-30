import getFruit from './kata082.js';

describe('Kata #8.2', () => {

  test('Ha de retornar el valor de la propietat fruit quan existeix a l"objecte tree', () => {
    let tree = {
      species: 'lemonTree',
      fruit: 'lemon'
    };

    expect(getFruit(tree)).toBe('lemon');
  });

  test('Ha de retornar l’string “No fruit” quan la propietat fruit no està definida a l’objecte tree', () => {
    let treeCat = {
      especie: 'lemonTree',
      fruita: 'lemon'
    };
    expect(getFruit(treeCat)).toBe('No fruit');

    let treeWithoutFruit = {
      species: 'lemonTree'
    };
    expect(getFruit(treeWithoutFruit)).toBe('No fruit');
  });
  
});