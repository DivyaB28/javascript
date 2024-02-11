const mySet = new Set([1, 2, 3]);
console.log(mySet.has(1));
mySet.add(4);
mySet.delete(4);
console.log(mySet.size);
// to delete all items
mySet.clear();

for (let item of mySet) {
  console.log(item);
}
