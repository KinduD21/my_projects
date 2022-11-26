// function getTimeDelta(x, y) {
//   let h1 = parseInt(x);
//   let h2 = parseInt(y);
//   let diff = h1 * 60 - h2 * 60;
//   diff = Math.abs(diff);
//   let diffH = diff * 60;
//   return diffH;
// }

console.log(getTimeDelta("00:00:00", "00:00:01"));
console.log(getTimeDelta("01:01:01", "02:02:02"));
console.log(getTimeDelta("01:19:30", "01:20:20"));

function getTimeDelta(x, y) {
  let stringX = x.split(":");
  let stringY = y.split(":");

  const seconds1 = stringX[0] * 3600 + stringX[1] * 60 + stringX[2] * 1;
  const seconds2 = stringY[0] * 3600 + stringY[1] * 60 + stringY[2] * 1;

  return seconds2 - seconds1


  // for (i = 0; i <= stringX; i++) {
  //   if (i == 60) {
  //     timeX += i;
  //   }
  // }

  // for (i = 0; i <= stringY; i++) {
  //   if (i == 60) {
  //     timeY += i;
  //   }
  // }

  // return timeY - timeX;
}
