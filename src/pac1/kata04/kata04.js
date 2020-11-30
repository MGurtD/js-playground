export default function removeFirstAndLast(string) {
  if (string.length <= 2) return string;

  return string.substring(1, string.length - 1);
}
