function countingSort(array, minValue, maxValue) {
  let z = 0,
    count = [];

  for (let i = minValue; i <= maxValue; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  for (let i = minValue; i <= maxValue; i++) {
    console.log(`i - ${i} count[i] --${count} array ${array}`);
    while (count[i]-- > 0) {
      console.log(`i -${i} count[i] --${count[i]} `);
      array[z++] = i;
      console.log(array);
    }
  }
  return array;
}

var array = [9, 4, 1, 7, 9, 1, 2, 0];
console.log(countingSort(array, 0, 9));
