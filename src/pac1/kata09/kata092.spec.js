import plantTree from './kata092.js';

describe('Katas #8', () => {

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

  test('Ha d’existir un mètode getFruit', () => {
    expect('getFruit' in tree).toBe(true);
  });

  test('El resultat d’invocar el mètode getFruit sobre l’objecte creat prèviament ha de ser "apple"', () => {
    expect(tree.getFruit()).toBe('apple');
  });

})

describe('Kata #9.2', () => {
  let tree = plantTree('pearTree', 'pear');

  test('En cas de no rebre dos paràmetres de tipus string, retornarà null', () => {
    expect(plantTree()).toBeNull();
    expect(plantTree('apple')).toBeNull();
    expect(plantTree('apple', 1)).toBeNull();
    expect(plantTree(5, 1)).toBeNull();
  });

  test('L’objecte retornat inclou tres propietats: species , fruit i getFruit', () => {
    expect('species' in tree).toBe(true);
    expect('fruit' in tree).toBe(true);
    expect('getFruit' in tree).toBe(true);
  });

  test('Al invocar el mètode getFruit ens retorna el valor pear', () => {
    expect(tree.getFruit()).toBe('pear');
  });
});