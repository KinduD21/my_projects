// function getPower(n) {
//   let result = Math.sqrt(n);
//   if (Number.isInteger(result)) {
//     return result;
//   } else return undefined;
// }

// function getPower(n) {
//   n = Math.pow(x, 2);
//   return x;
// }

function getPower(n) {
  let result = 0;
  for (i = 1; i < n; i++) {
    if (2 ** i == n) {
      result += i;
    }
  }
  if (!Number.isInteger(result) || result <= 0) {
    return undefined;
  } else return result;
}

console.log(getPower(2));
console.log(getPower(3));
console.log(getPower(256));
