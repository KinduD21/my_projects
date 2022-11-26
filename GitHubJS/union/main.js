function union(arr1, arr2) {
  let result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i])
      }
    }
  }

  return result.sort()
}

console.log(union([1, 3, 2, 5, 8], [5, 3, 7, 7, 26666,111,11111])) // [3, 5]
console.log(union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [6,12,6, 12,722222,6,322222,222,2])) // [2, 6, 12]
console.log(union([1, 2, 3], [11, 0, -1])) // []

// function arrayCompare(_arr1, _arr2) {
//   if (
//     !Array.isArray(_arr1) ||
//     !Array.isArray(_arr2) ||
//     _arr1.length !== _arr2.length
//   ) {
//     return false;
//   }

//   // .concat() to not mutate arguments
//   const arr1 = _arr1.concat().sort();
//   const arr2 = _arr2.concat().sort();

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// }
