type Path = {
  i: number;
  j: number;
  hp: number;
  min: number;
};

function calculateMinimumHP(dungeon: number[][]): number {
  const m = dungeon.length;
  const n = dungeon[0].length;

  const cache = Array<number>(n + 1);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1 && j === n - 1) {
        cache[j] = Math.max(1, -dungeon[i][j] + 1);
      } else {
        const res1 = cache[j] ?? Infinity;
        const res2 = cache[j + 1] ?? Infinity;
        cache[j] = Math.max(1, Math.min(res1, res2) - dungeon[i][j]);
      }
    }
  }

  return cache[0];
}
