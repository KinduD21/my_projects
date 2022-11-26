// function decrypt(secret) {
//   let alph = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   secret = secret.split("");
//   for (let i = 0; i < secret.length; i++) {
//     if (secret[i] == "a") {
//       secret[i] = "b";
//     }
//     if (secret[i] == "b") {
//       secret[i] = "c";
//     }
//     if (secret[i] == "c") {
//       secret[i] = "d";
//     }
//     if (secret[i] == "d") {
//       secret[i] = "e";
//     }
//     if (secret[i] == "e") {
//       secret[i] = "f";
//     }
//     if (secret[i] == "f") {
//       secret[i] = "g";
//     }
//     if (secret[i] == "g") {
//       secret[i] = "h";
//     }
//     if (secret[i] == "h") {
//       secret[i] = "i";
//     }
//     if (secret[i] == "i") {
//       secret[i] = "j";
//     }
//     if (secret[i] == "j") {
//       secret[i] = "k";
//     }
//     if (secret[i] == "k") {
//       secret[i] = "l";
//     }
//     if (secret[i] == "l") {
//       secret[i] = "m";
//     }
//     if (secret[i] == "m") {
//       secret[i] = "n";
//     }
//     if (secret[i] == "n") {
//       secret[i] = "o";
//     }
//     if (secret[i] == "o") {
//       secret[i] = "p";
//     }
//     if (secret[i] == "p") {
//       secret[i] = "q";
//     }
//     if (secret[i] == "q") {
//       secret[i] = "r";
//     }
//     if (secret[i] == "r") {
//       secret[i] = "s";
//     }
//     if (secret[i] == "s") {
//       secret[i] = "t";
//     }
//     if (secret[i] == "t") {
//       secret[i] = "u";
//     }
//     if (secret[i] == "u") {
//       secret[i] = "v";
//     }
//     if (secret[i] == "v") {
//       secret[i] = "w";
//     }
//     if (secret[i] == "w") {
//       secret[i] = "x";
//     }
//     if (secret[i] == "x") {
//       secret[i] = "y";
//     }
//     if (secret[i] == "y") {
//       secret[i] = "z";
//     }
//     if (secret[i] == "z") {
//       secret[i] = "a";
//     }
//   }
//   return secret;
// }

let decrypt = (secret) => {
  let first = 97,
    last = 122;
  let reverseShiftChar = (char) => {
    let res = char.toLowerCase().charCodeAt(0);
    if (res == last) return first;
    if (res > last || res < first) return res;
    res += 1;
    if (res < first) return last - (first - res);
    return res;
  };
  let result = new Array(secret.length);
  for (let i = 0; i < secret.length; i++) {
    result[i] = String.fromCharCode(reverseShiftChar(secret[i]));
  }
  return result.join("");
};

console.log(decrypt("bnqqdbs"));
console.log(decrypt("zmc vd hfmnqd rozbdr"));
