function maximalSquare(matrix: string[][]): number {
  const n = matrix.length;
  const m = matrix[0].length;

  const dp = Array.from({ length: m + 1 }, () => 0);
  let max = 0;
  for (let i = 0; i < n; i++) {
    let prev = 0;
    for (let j = 0; j < m; j++) {
      let temp = dp[j + 1];
      if (matrix[i][j] === "1") {
        dp[j + 1] = Math.min(prev, dp[j], dp[j + 1]) + 1;
        max = Math.max(max, dp[j + 1]);
      } else {
        dp[j + 1] = 0;
      }
      prev = temp;
    }
  }

  return max ** 2;
}
