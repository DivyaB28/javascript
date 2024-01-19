function transpose(matrix) {
  let n = matrix.length;

  let temp;
  //If you notice it carefully, the transpose of a square matrix is simply a matter of reflecting elements amid
  // the main diagonal (i.e. the diagonal that runs from the top-left corner to the bottom-right corner).
  //That is, corresponding elements on either side of this diagonal are swapped with one another.

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);
  return matrix;
}

transpose([
  [1, 4],
  [10, 2],
]);
// [[1, 10], [4, 2]]
transpose([
  [3, 5, 6],
  [10, 4, 2],
  [1, 7, 8],
]);
// [[3, 10, 1], [5, 4, 7], [6, 2, 8]]
transpose([[2]]);
// [[2]]
