function checkTicket(number) {
  number = number.toString();
  let half = number.length / 2;
  let first = 0;
  let second = 0;
  for (let i = 0; i < half; i++) {
    first += +number[i];
  }
  for (let j = half; j < number.length; j++) {
    second += +number[j];
  }

  console.log(first, second);
  if (first != second) {
    return false;
  } else {
    return true;
  }
}

console.log(checkTicket("005212"));
console.log(checkTicket("133700"));
console.log(checkTicket("123032"));
