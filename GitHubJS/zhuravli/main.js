function computeOrizurus(total) {
  let boys = total / 6;
  let girl = (boys + boys) * 2;
  return [boys, girl, boys];
}

console.log(computeOrizurus(6));
console.log(computeOrizurus(24));
console.log(computeOrizurus(11));
