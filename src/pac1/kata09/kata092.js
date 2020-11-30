export default function plantTree (species, fruit) {
    if (typeof species !== 'string' || typeof fruit !== 'string') {
      return null;
    }
  
    return {
      species: species,
      fruit: fruit,
      getFruit : () => {
        return fruit
      }
    };
  };
  