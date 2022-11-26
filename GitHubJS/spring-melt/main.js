function getSpringMeltStreak(days) {
  let temp = 0;
  let streak = 0;
  for (i = 0; i < days.length; i++) {
    if (days[i] > 0) {
      temp += 1;
    } else {
      temp = 0;
    }
    if (temp > streak) {
      streak = temp;
    }
  }
  return streak;
}

console.log(getSpringMeltStreak([-20, 30, -40, 50, 10, -10]));
console.log(getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3]));
console.log(getSpringMeltStreak([-10, 0, -10, 0, -10]));
