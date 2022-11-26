function anagram(x, y) {
  let len1 = x.length;
  let len2 = y.length;
  if (len1 !== len2) {
    return "Invalid Input";
  }
  let str1 = x.toLowerCase().split("").sort().join("");
  let str2 = y.toLowerCase().split("").sort().join("");
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

console.log(anagram("Волос", "Слово"));
console.log(anagram("Живу", "Вижу"));
console.log(anagram("Жиуу", "Вииижу"));
console.log(anagram("Жива", "Вежу"));
