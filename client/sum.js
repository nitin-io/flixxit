export default function (...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
