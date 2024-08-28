function pattern1(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      process.stdout.write("* ");
    }
    // console.log("\n");
    process.stdout.write("\n");
  }
}
pattern1(3);
