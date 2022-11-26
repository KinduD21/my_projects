// function validatePassword(password) {
//   if (password.length < 7) {
//     return false;
//   }
//   let arr = [];
//   for (i = 0; i < password.length; i++) {
//     if (!isNaN(password[i])) {
//       arr.push(password[i]);
//     }
//   }
// }

function validatePassword(password) {
  let arr = [];
  for (i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      arr.push(password[i]);
    }
  }
  if (password.length < 7 || arr.length == 0) {
    return false;
  }
  password = password.split("");
  let isBigChar = false;
  let isSmallChar = false;
  for (let i = 0; i < password.length; i++) {
    if (!Number(password[i])) {
      if (password[i] === password[i].toUpperCase()) {
        isBigChar = true;
      }

      if (password[i] === password[i].toLowerCase()) {
        isSmallChar = true;
      }
    }
  }
  return isBigChar && isSmallChar;
}

console.log(validatePassword("abcdefG1")); // true
console.log(validatePassword("abcdefw1")); // false
console.log(validatePassword("AAAAAA1")); // false

console.log(validatePassword("abcdefG1")); // true
console.log(validatePassword("abcdefw1")); // false
