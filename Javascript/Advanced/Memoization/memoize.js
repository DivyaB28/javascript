function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Fetching from cache", key);
      return cache.get(key);
    } else {
      console.log("Calculating result for", key);
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

// Example usage:
const slowFunction = (num) => {
  // Simulate a slow computation
  for (let i = 0; i < 1e6; i++) {}
  return num * 2;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Calculating result
console.log(memoizedFunction(5)); // Fetching from cache
console.log(memoizedFunction(10)); // Calculating result
console.log(memoizedFunction(10)); // Fetching from cache
