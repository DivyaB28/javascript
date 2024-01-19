function add(a, b) {
  let m = a.length,
    n = a[0].length;
  let sum = [];

  for (let i = 0; i < m; i++) {
    sum.push([]);
    for (let j = 0; j < n; j++) {
      sum[i].push(a[i][j] + b[i][j]);
    }
  }
  return sum;
}

function multiply(a, b) {
  var m = a.length,
    n = a[0].length,
    p = b[0].length;

  let product = [];

  for (let i = 0; i < m; i++) {
    product.push([]);
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      product[i].push(sum);
    }
  }
  return product;
}
