function cartesianProduct(arr1, arr2) {
  const cartesianArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      cartesianArr.push([arr1[i], arr2[j]]);
    }
  }
  return cartesianArr;
}
const arr1 = [1, 2],
  arr2 = [3, 4];
console.log(cartesianProduct(arr1, arr2));
