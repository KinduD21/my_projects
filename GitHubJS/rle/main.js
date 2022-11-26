function rle(value) {
  for (var i = 0, a = 0, b = ""; i <= value.length; i++) {
    if (value[i] == value[i + 1]) a++;
    else {
      b += (a ? a + 1 : "") + value[i];
      a = 0;
    }
  }
  return b;
}

console.log(rle("AAABC"));
console.log(rle("AAAaaB"));
