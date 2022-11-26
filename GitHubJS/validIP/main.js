function isIpValid(address) {
  if (!address.includes(".")) {
    return false;
  }
  address = address.split(".");
  console.log(address);
  if (address.length != 4) {
    return false;
  }
  for (let i = 0; i < address.length; i++) {
    if (address[i] < 0 || address[i] > 255) {
      return false;
    }
  }
  return true;
}

console.log(isIpValid("127.0.0.1")); // true
console.log(isIpValid("127.0.0.0255")); // true
console.log(isIpValid("127.0.256.0255")); // false
console.log(isIpValid("Hello world")); // false
