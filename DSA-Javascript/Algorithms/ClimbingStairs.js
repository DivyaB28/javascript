function climbingStairs(n) {
  const noOfStairs = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfStairs[i] = noOfStairs[i - 1] + noOfStairs[i - 2];
  }
  return noOfStairs[n - 1];
}

console.log(climbingStairs(1));
console.log(climbingStairs(2));
console.log(climbingStairs(3));
console.log(climbingStairs(4));
console.log(climbingStairs(5));

//Big-O : O(N) -> linear
