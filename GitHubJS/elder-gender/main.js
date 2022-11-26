// print on console index of a male > age
function census(list) {
  // let idMale = true;
  // let maxAge = 0;
  // for (let i = 0; i < list.length; i++) {
  //   console.log(list[i].age);
  //   if(list[i].age > maxAge) {
  //     maxAge = i;
  //   }
  // }

  // console.log(maxAge)
  return list.reduce((accumulator, currentValue, currentIndex) => {
    if(currentValue.age > list[accumulator].age) {
      return currentIndex
    }
  }, 0)
}

console.log(
  census([
    { age: 12, gender: "Male" },
    { age: 40, gender: "Male" },
    { age: 6, gender: "Male" },
    { age: 50, gender: "Male" },
    { age: 9, gender: "Male" },
  ])
);
// console.log(census([{ age: 40, gender: "Female" }]));
