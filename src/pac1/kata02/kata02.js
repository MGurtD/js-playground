export default function sumPositiveElements(arrayOfNumbers) {
  let sum = 0;

  if (!Array.isArray(arrayOfNumbers)) {
    return sum;
  }

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > 0) {
      sum += arrayOfNumbers[i];
    }
  }

  return sum;
}
