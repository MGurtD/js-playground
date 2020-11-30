export default function getFruit(tree) {

  if('fruit' in tree === false){
    return 'No fruit';
  }

  return tree.fruit;

};
