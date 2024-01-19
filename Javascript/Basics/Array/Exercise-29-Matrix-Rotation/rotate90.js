function rotateBy90(matrix) {
  let n = matrix.length;
  let matrixCopy = [];

  for (let i = 0; i < n; i++) {
    matrixCopy.push([]);
    for (let j = 0; j < n; j++) {
      matrixCopy[i].push(matrix[i][j]);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrixCopy[n - j - 1][i];
    }
  }
  return matrix;
}

console.log(
  rotateBy90([
    [1, 4],
    [10, 2],
  ])
);
