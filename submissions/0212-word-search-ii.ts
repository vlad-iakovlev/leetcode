class Trie {
  children = Array.from({ length: 26 }, (): Trie | null => null);
  count = 0;
  word: string | null = null;
}

function findWords(board: string[][], words: string[]): string[] {
  const root = new Trie();
  for (let word of words) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
      const charCode = word.charCodeAt(i);
      if (!node.children[charCode]) {
        node.children[charCode] = new Trie();
        node.count++;
      }
      node = node.children[charCode];
    }
    node.word = word;
  }

  const found: string[] = [];

  function dfs(prevNode: Trie, i: number, j: number) {
    const char = board[i]?.[j];
    if (!char) return;

    const charCode = char.charCodeAt(0);
    const node = prevNode.children[charCode];
    if (!node) return;

    if (node.word) {
      found.push(node.word);
      node.word = null;
    }

    board[i][j] = "";

    dfs(node, i - 1, j);
    dfs(node, i + 1, j);
    dfs(node, i, j - 1);
    dfs(node, i, j + 1);

    board[i][j] = char;

    if (!node.count && !node.word) {
      prevNode.children[charCode] = null;
      prevNode.count--;
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      dfs(root, i, j);
    }
  }

  return found;
}
