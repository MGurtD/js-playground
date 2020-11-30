
class Tree {
    constructor(species, fruit) {
        this.species = species;
        this.fruit = fruit;
    }

    getFruit(){
        return this.fruit;
    }

    getSpecies(){
        return this.species;
    }

    /**
     * @param {string} species
     */
    setSpecies(species){
        if(typeof species !== 'string'){
            throw new Error ();
        }

        this.species = species;
    }

    /**
     * @param {string} fruit
     */
    setFruit(fruit){
        if(typeof fruit !== 'string'){
            throw new Error ('Tipus de dada no suportat');
          }
          
          // Comprobar que 'fruit' comenci pels 4 primers carácters de 'tree.species' 
          let regex = RegExp(this.species.substring(0, 4));
          if(!regex.test(fruit)){
            throw new Error ('Valor no suportat');
          }

        this.fruit = fruit
    }
}


export default function createTree (species, fruit) {
    if (typeof species !== 'string' || typeof fruit !== 'string') {
      return null;
    }

    return new Tree(species, fruit);
  };
  