export default function plantTree (spieces, fruit) {
    if (typeof spieces !== 'string' || typeof fruit !== 'string') {
      return null;
    }
  
    return {
      getFruit : () => {
        return fruit
      },
      getSpecies: () => {
        return spieces
      }
    };
  };
  