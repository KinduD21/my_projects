function checkBusTour(bridges) {
  let busHeight = 512;
  for (i = 0; i < bridges.length; i++) {
    if (bridges[i] <= busHeight) {
      return i + 1;
    }
  }
}

console.log(checkBusTour([600, 512]));
console.log(checkBusTour([600, 1024]));
console.log(checkBusTour([600, 512, 100]));
console.log(checkBusTour([600, 512, 600, 100]));
