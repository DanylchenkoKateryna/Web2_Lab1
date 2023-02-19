function getDays (month, year) {
  return new Date(year, month, 0).getDate()
};

console.log(getDays(4, 2023))
