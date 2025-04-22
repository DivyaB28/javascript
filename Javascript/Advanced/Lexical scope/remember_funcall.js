// Coding Challenges:✅ Write a function that remembers how many times it has been called.

function createCallCounter() {
  let callCount = 0;

  return function () {
    callCount++;
    console.log(`This function has been called ${callCount} times.`);
    return callCount;
  };
}

// Example usage:
const rememberFuncCall = createCallCounter();
rememberFuncCall(); // This function has been called 1 times.
rememberFuncCall(); // This function has been called 2 times.
rememberFuncCall(); // This function has been called 3 times.
