function pattern2(N) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
  return;
}
pattern2(5);

/**
 * Right Angled Number pyramid
 */

function pattern3(N) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j}`);
    }
    process.stdout.write("\n");
  }
  return;
}
pattern3(5);

/**
 * Right-Angled Number Pyramid - II
 */

function pattern4(N) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${i}`);
    }
    process.stdout.write("\n");
  }
  return;
}
pattern4(5);

/**
 * Inverted Right Pyramid
 */

function pattern5(N) {
  for (let i = N; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
  return;
}
pattern5(5);

/**
 * Inverted Numbered Right Pyramid
 */
function pattern6(N) {
  for (let i = 0; i < N; i++) {
    for (let j = N; j > i; j--) {
      process.stdout.write(`${N - j + 1} `);
    }
    process.stdout.write("\n");
  }
  return;
}
pattern6(5);
