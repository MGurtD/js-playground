function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}
test();

/*
================================================
  Retorn de la consola
================================================
  
    undefined
    2
  
================================================
  Explicació
================================================
  
    Es retorna 'undefined' perquè la variable 'a' no existeix encara en l'scope local,
    es declara a la línea 6
  
    ------------
  
    Es retorna '2' perquè és el resultat de invocar la funció foo()

    El motor de Javascript, recorda la declaració de la funció en scope local de 'test'
    i sap on trobar-la quan s'interpreta el console.log(foo())
  
  */
