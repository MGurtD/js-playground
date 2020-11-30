let logTree = function(fruit) {
    console.log(`Este árbol es un ${this.toString()} y da ${fruit}`);
}

String.prototype.presentTree = logTree;

export default function createTree(){
    let species = 'appleTree';

    return {
        getSpecies: () => {
            return species;
        }
    }

}