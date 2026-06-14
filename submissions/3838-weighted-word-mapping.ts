function mapWordWeights(words: string[], weights: number[]): string {
  return words.reduce((acc, word) => {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += weights[word.charCodeAt(i) - 97];
    }

    return acc + String.fromCharCode(97 + 25 - (sum % 26));
  }, "");
}
