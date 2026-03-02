function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const islands = new Array(n).fill(0);
  let count = 0;
  let merged = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        if (!islands[j]) {
          islands[j] = islands[j - 1] || ++count;
        } else if (islands[j - 1] && islands[j] !== islands[j - 1]) {
          const val = islands[j];
          for (let k = 0; k < n; k++) {
            if (islands[k] === val) {
              islands[k] = islands[j - 1];
            }
          }
          merged++;
        }
      } else {
        islands[j] = 0;
      }
    }
  }

  return count - merged;
}
