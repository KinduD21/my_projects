function getWinner(points) {
  points = points.toString();
  points = points.split("-");
  points = points.join();
  points = points.split(",");
  let odd = 0;
  let even = 0;
  for (i = 0; i < points.length; i++) {
    if (points[i] % 2 !== 0) {
      even += +points[i];
    } else if (points[i] % 2 == 0) {
      odd += +points[i];
    }
  }
  console.log(odd);
  console.log(even);
  if (odd > even) return "1";
  if (odd < even) return "2";
  if (odd == even) return "tie";
}

console.log(getWinner(["23-26", "24-30", "30-27", "35-31"]));
console.log(getWinner(["36-32", "32-24", "20-28", "30-26"]));
console.log(getWinner(["36-18", "22-31", "27-21", "19-34"]));
