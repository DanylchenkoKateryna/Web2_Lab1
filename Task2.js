function SortWord (str) {
  if (!str || typeof str !== 'string') {
    return 'Please enter a string'
  }
  const SymbolArray = []
  for (let i = 0; i < str.length; i++) {
    SymbolArray[i] = str[i]
  }
  return SymbolArray.sort().join('')
}

console.log(SortWord('bca'))
