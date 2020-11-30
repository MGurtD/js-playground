import createTree from './kata10';

describe('Kata #10 Prototip', () => {
  test('tree té el mètode getSpecies que retorna un string que té el mètode presentTree', () => {
    let tree = createTree();
    expect('getSpecies' in tree).toBe(true);

    let species = tree.getSpecies();
    expect('presentTree' in species.__proto__).toBe(true);
  });

  test('presentTree imprimirá a la consola “Este àrbol es un ${nuestro_arbol} i da ${nuestra_fruta}”', () => {
    let tree = createTree();

    tree.getSpecies().presentTree('apple');
  });
});