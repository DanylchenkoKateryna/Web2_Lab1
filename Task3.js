function GCD (a, b) {
  if (a === 0) {
    return b
  } else {
    while (b !== 0) {
      if (a > b) {
        a -= b
      } else {
        b -= a
      }
    }
    return a
  }
}

console.log(GCD(100, 70))
