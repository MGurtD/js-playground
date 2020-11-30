
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
          throw new Error ('Tipus de dada no suportat');
        }
        
        // Comprobar que 'fruit' comenci pels 4 primers carácters de 'tree.spieces' 
        let regex = RegExp(tree.spieces.substring(0, 4));
        if(!regex.test(fruit)){
          throw new Error ('Valor no suportat');
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
  