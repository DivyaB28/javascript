function counter() {
  var count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  function decrement() {
    count--;
    console.log(count);
  }
  function reset() {
    count = 0;
    console.log(count);
  }

  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
}
