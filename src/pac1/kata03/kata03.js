export default function repeatString(string, numberOfRepeats) {
  let repeatString = '';

  if (typeof string !== 'string' || typeof numberOfRepeats !== 'number') return repeatString;
  if (numberOfRepeats < 0) return repeatString;

  while (numberOfRepeats != 0) {
    repeatString += string;
    numberOfRepeats--;
  }

  return repeatString;
}
