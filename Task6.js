const Users = [
  { name: 'Viktor', age: 21 },
  { name: 'Olha', age: 37 },
  { name: 'Volodya', age: 45 },
  { name: 'Mykyta', age: 12 },
  { name: 'Kateryna', age: 13 },
  { name: 'Anna', age: 37 }
]

// сортувати за властивістю name
Users.sort((a, b) => {
  const nameA = a.name.toUpperCase()
  const nameB = b.name.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
  // значення полів name однакові
  return 0
})
console.log(Users)
