function sum(n) {
  if (n <= 0) {
    return 1;
  } else return (n * (n + 1)) / 2;
}

console.log(sum(5));
