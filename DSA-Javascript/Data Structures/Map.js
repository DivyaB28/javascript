const map = new Map([
  ["a", 2],
  ["b", 3],
]);

map.set("c", 4);

console.log(map.has("a"));
console.log(map.delete("c"));
console.log(map.size);
map.clear();

for (let [key, value] of map) {
  console.log(`${key} : ${value}`);
}
