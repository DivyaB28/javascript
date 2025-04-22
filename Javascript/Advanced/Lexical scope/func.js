const myFunction = () => {
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
    console.log(myValue + 1);
  };
  return childFunction;
};

let result = myFunction();
result(); // 3
result(); // 3
result(); // 3
result(); // 3
