function sortTimestamps(list) {
  list.sort();
  return list;
}

console.log(sortTimestamps(["23:02:59", "02:07:00"]));
console.log(
  sortTimestamps(["23:02:59", "22:11:15", "09:08:05", "05:07:01", "15:07:10"])
);
