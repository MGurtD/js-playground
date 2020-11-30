import plantTree from './kata094.js';

describe('Katas #8', () => {
  let tree = plantTree('appleTree', 'apple');

  test('Ha d’existir un mètode getFruit', () => {
    expect('getFruit' in tree).toBe(true);
  });

  test('El resultat d’invocar el mètode getFruit sobre l’objecte creat prèviament ha de ser "apple"', () => {
    expect(tree.getFruit()).toBe('apple');
  });
})

describe('Kata #9.4', () => {
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

  test('L’objecte retornat inclou quatre propietats: getSpecies , setSpecies , getFruit i setFruit', () => {
    expect(Object.values(tree).length).toBe(4);
    expect('getFruit' in tree).toBe(true);
    expect('getSpecies' in tree).toBe(true);
    expect('setFruit' in tree).toBe(true);
    expect('setSpecies' in tree).toBe(true);
  });

  test('Crear un àbre + invocar setFruit(), la propietat fruit canvia quan es una cadena de text', () => {
    let tree = plantTree('pearTree', 'pear');
    tree.setFruit(14);
    tree.setFruit(undefined);
    tree.setFruit(false);
    tree.setFruit(new Date());
    expect(tree.getFruit()).toBe('pear');

    tree.setFruit('apple');
    expect(tree.getFruit()).toBe('apple');
  });

  test('Crear un àbre + invocar setSpecies(), la propietat species canvia quan es una cadena de text', () => {
    let tree = plantTree('pearTree', 'pear');
    tree.setSpecies(14);
    tree.setSpecies(undefined);
    tree.setSpecies(false);
    tree.setSpecies(new Date());
    expect(tree.getSpecies()).toBe('pearTree');

    tree.setSpecies('appleTree');
    expect(tree.getSpecies()).toBe('appleTree');
  });
});