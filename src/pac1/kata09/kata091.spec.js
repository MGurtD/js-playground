import plantTree from './kata091.js';

describe('Tests katas anteriors', () => {

  let tree = plantTree('appleTree', 'apple');

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

})

describe('Kata #9.1', () => { 

  test('En cas de no rebre dos paràmetres de tipus string, retornarà null', () => {
    expect(plantTree()).toBeNull();
    expect(plantTree('apple')).toBeNull();
    expect(plantTree('apple', 1)).toBeNull();
    expect(plantTree(5, 1)).toBeNull();
  });

  test('A l’invocar la funció amb els paràmetres pearTree i pear retorna l’objecte', () => {
    expect(plantTree('pearTree', 'pear')).toMatchObject({
      species: 'pearTree',
      fruit: 'pear',
    });
  });
});