export default function sumatori(num) {
  let sumatori = 0;

  while (num !== 0) {
    sumatori += num;
    num--;
  }

  return sumatori;
}
