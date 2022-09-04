export function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export function cleanString(string) {
  return string.replace(/-/g, " ");
}
