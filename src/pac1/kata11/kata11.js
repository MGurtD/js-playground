let logTree = function(fruit) {
  console.log(`Este árbol es un ${this.toString()} y da ${fruit}`);
}

String.prototype.presentTree = logTree;

export default function createTree (spieces, fruit) {
    if (typeof spieces !== 'string' || typeof fruit !== 'string') {
      return null;
    }

    let tree ={
      spieces : spieces,
      fruit : fruit
    }
  
    return {
      getFruit : () => {
        return tree.fruit
      },
      getSpecies: () => {
        return tree.spieces
      },
      setFruit : (fruit) => {
        if(typeof fruit !== 'string'){
          throw new Error ();
        }

        tree.fruit = fruit
      },
      setSpecies: (species) => {
        if(typeof species !== 'string'){
          throw new Error ();
        }
        
          
        tree.spieces = species
      }
    };
  };
  