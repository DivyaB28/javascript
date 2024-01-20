function getDistanceCalculator(a) {
  return function (b) {
    return (((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2) ** 0.5).toFixed(1);
  };
}

let distanceFromOrigin = getDistanceCalculator([0, 0]);

console.log(distanceFromOrigin([30, 5]));
console.log(distanceFromOrigin([8, 8]));
console.log(distanceFromOrigin([-5, -10]));
let distanceFromPoint = getDistanceCalculator([5, 5]);
console.log(distanceFromPoint([10, 2]));
console.log(distanceFromPoint([0, 1]));
console.log(distanceFromPoint([-90, -1]));
