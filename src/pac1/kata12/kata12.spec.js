import createTree from './kata12';

describe('Katas #8', () => {
  let tree = createTree('appleTree', 'apple');

  test('Ha d’existir un mètode getFruit', () => {
    expect('getFruit' in tree).toBe(true);
  });

  test('El resultat d’invocar el mètode getFruit sobre l’objecte creat prèviament ha de ser "apple"', () => {
    expect(tree.getFruit()).toBe('apple');
  });
})

describe('Kata #9.4', () => {
  let tree = createTree('pearTree', 'pear');

  test('En cas de no rebre dos paràmetres de tipus string, retornarà null', () => {
    expect(createTree()).toBeNull();
    expect(createTree('apple')).toBeNull();
    expect(createTree('apple', 1)).toBeNull();
    expect(createTree(5, 1)).toBeNull();
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
  
});

describe('Kata #12', () => {
    test('L’objecte retornat inclou quatre propietats: getSpecies , setSpecies , getFruit i setFruit', () => {
    let tree = createTree('pearTree', 'pear');

    expect(Object.values(tree).length).toBe(4);
    expect('getFruit' in tree).toBe(true);
    expect('getSpecies' in tree).toBe(true);
    expect('setFruit' in tree).toBe(true);
    expect('setSpecies' in tree).toBe(true);
  });  

  test('Crear tree "manzano" i "manzana" + invocar setFruit amb valor "pera", es llança un error i la propietat fruit manté el valor previ', ()=>{
    let tree = createTree('manzano', 'manzana');

    expect(() =>{ tree.setFruit('pera') }).toThrowError(/suportat/);
  });

  test('Crear tree "peral" i "manzana" + invocar setFruit amb valor "pera", es modifica la propietat fruit', ()=>{
    let tree = createTree('peral', 'manzana');

    tree.setFruit('pera');
    expect(tree.getFruit()).toBe('pera');
  });
 
});