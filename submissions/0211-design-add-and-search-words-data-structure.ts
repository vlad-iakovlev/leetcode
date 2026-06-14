class WordDictionary {
  private children: Record<string, WordDictionary> = {};
  private terminated = false;

  constructor() {}

  addWord(word: string): void {
    if (!word) {
      this.terminated = true;
    } else {
      this.children[word[0]] ??= new WordDictionary();
      this.children[word[0]].addWord(word.slice(1));
    }
  }

  search(word: string): boolean {
    if (!word) return this.terminated;

    if (word[0] === ".") {
      return Object.values(this.children).some((dict) =>
        dict.search(word.slice(1)),
      );
    }

    return this.children[word[0]]?.search(word.slice(1)) ?? false;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
