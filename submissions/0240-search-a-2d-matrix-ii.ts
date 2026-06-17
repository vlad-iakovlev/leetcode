function searchMatrix(matrix: number[][], target: number): boolean {
  const n = matrix.length;
  const m = matrix[0].length;

  let i = 0;
  let j = m - 1;
  while (i < n && j >= 0) {
    const num = matrix[i][j];
    if (num === target) return true;
    if (num < target) i++;
    if (num > target) j--;
  }

  return false;
}
