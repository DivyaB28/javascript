var nums = [
  Number(prompt("Enter a number:")),
  Number(prompt("Enter a number:")),
  Number(prompt("Enter a number:")),
];

document.write(
  nums.sort(function (a, b) {
    return a - b;
  })
);
