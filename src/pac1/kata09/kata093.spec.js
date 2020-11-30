import plantTree from './kata093.js';

describe('Katas #8', () => {
  let tree = plantTree('appleTree', 'apple');

  test('Ha d’existir un mètode getFruit', () => {
    expect('getFruit' in tree).toBe(true);
  });

  test('El resultat d’invocar el mètode getFruit sobre l’objecte creat prèviament ha de ser "apple"', () => {
    expect(tree.getFruit()).toBe('apple');
  });
})

describe('Kata #9.3', () => {
  let tree = plantTree('pearTree', 'pear');

  test('En cas de no rebre dos paràmetres de tipus string, retornarà null', () => {
    expect(plantTree()).toBeNull();
    expect(plantTree('apple')).toBeNull();
    expect(plantTree('apple', 1)).toBeNull();
    expect(plantTree(5, 1)).toBeNull();
  });

  test('Al invocar el mètode getFruit ens retorna el valor pear', () => {
    expect(tree.getFruit()).toBe('pear');
  });

  test('L’objecte retornat inclou només dos propietats: getSpecies i getFruit', () => {
    expect(Object.values(tree).length).toBe(2);
    expect('getFruit' in tree).toBe(true);
    expect('getSpecies' in tree).toBe(true);
  });

  test('Al invocar el mètode getSpecies ens retorna el valor pearTree', () => {
    expect(tree.getSpecies()).toBe('pearTree');    
  });

  test('Al invocar el mètode getFruit ens retorna el valor pear', () => {
    expect(tree.getFruit()).toBe('pear');    
  });
});