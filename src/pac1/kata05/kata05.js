// https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
// @Kamil Kiełczewski
export default function removeFirstAndLast(string) {
  return string.replace(/ /g, '');
}
