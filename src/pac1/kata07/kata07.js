const car = {
  brand: 'Ford',
  getBrand() {
    console.log(this.brand);
  },
};

car.getBrand(); // Ford

const cardBrandFunction = car.getBrand;

cardBrandFunction(); // undefined

// Solució.
cardBrandFunction.call(car); // Ford

/*

    Per a resoldre aquest exercici cal especificar el context d'execució utilizant el mètode
    'call(car)' el context de 'this' sigui 'car', per tant, tingui accès la propietat 'brand'
    amb valor 'Ford'.

*/
