export default function plantTree (spieces, fruit) {
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
        if(typeof fruit !== 'string')
          return;

        tree.fruit = fruit
      },
      setSpecies: (spieces) => {
        if(typeof spieces !== 'string')
          return;
          
        tree.spieces = spieces
      }
    };
  };
  