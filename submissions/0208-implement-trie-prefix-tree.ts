class Trie {
  private children: Record<string, Trie> = {};
  private terminated = false;

  constructor() {}

  insert(word: string): void {
    if (!word) {
      this.terminated = true;
    } else {
      this.children[word[0]] ??= new Trie();
      this.children[word[0]].insert(word.slice(1));
    }
  }

  search(word: string): boolean {
    if (!word) return this.terminated;
    return this.children[word[0]]?.search(word.slice(1)) ?? false;
  }

  startsWith(prefix: string): boolean {
    if (!prefix) return true;
    return this.children[prefix[0]]?.startsWith(prefix.slice(1)) ?? false;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
