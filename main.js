
class Ship {
  constructor (shipId, name, company) {
    this.shipId = shipId
    this.name = name
    this.company = company
  }
}

class Port {
  constructor (portId, pierId, name, address) {
    this.portId = portId
    this.pierId = pierId
    this.name = name
    this.address = address
  }
}

class Pier {
  constructor (pierId, name, address) {
    this.pierId = pierId
    this.name = name
    this.address = address
  }
}

class ActiveShip {
  constructor (shipId, pierId, shipOnPier) {
    this.shipId = shipId
    this.pierId = pierId
    this.shipOnPier = false
  }
}

var Ships = new Array(0)
var Ports = new Array(0)
var Piers = new Array(0)
var ActiveShips = new Array(0)

// Додавання
function addPort (portId, pierId = [], name, address) {
  if (findPort(portId) === undefined) {
    Ports.push(new Port(portId, pierId, name, address))
    return
  }
  console.log(
    'Error. Port ' + portId + ' has already been created. It must be unique!'
  )
}

function addPierToPort (portId, pierId) {
  const port = findPort(portId)
  const pier = port.pierId.find(element => element === pierId)
  if (port !== undefined && pier === undefined) {
    port.pierId.push(pierId)
  } else {
    console.log(
      'Error. Pier ' + pierId + ' has already been added to port. It must be unique!'
    )
  }
}

function addShip (shipId, name, company) {
  if (findShip(shipId) === undefined) {
    Ships.push(new Ship(shipId, name, company))
    return
  }
  console.log(
    'Error. Ship ' + shipId + ' has already been created. It must be unique!'
  )
}

function addPier (pierId, name, address) {
  if (findPier(pierId) === undefined) {
    Piers.push(new Pier(pierId, name, address))
    return
  }
  console.log(
    'Error. Pier ' + pierId + ' has already been created. It must be unique!'
  )
}

function addActiveShip (shipId, pierId) {
  if (findShip(shipId) === undefined) {
    console.log('Error. Ship ' + shipId + ' not found!"')
    return
  }
  if (findPier(pierId) === undefined) {
    console.log('Error. Pier ' + pierId + ' not found!')
    return
  }
  ActiveShips.push(new ActiveShip(shipId, pierId))
}

// Пошук
function findPort (criteria) {
  return Ports.find(
    (p) =>
      p.portId === criteria || p.name === criteria || p.address === criteria)
}

function findPier (criteria) {
  return Piers.find(
    (p) => p.pierId === criteria || p.name === criteria || p.address === criteria)
}

function findShip (criteria) {
  return Ships.find(
    (p) => p.shipId === criteria || p.name === criteria || p.company === criteria)
}

function findAllShipsOnPier (pierId) {
  return ActiveShips.filter((s) => s.pierId === pierId)
}

// Редагування
function editPort (criteria, PositionToChange, value) {
  const t = Ports.find((p) => p.portId === criteria || p.pierId === criteria || p.name === criteria || p.address === criteria)
  switch (PositionToChange) {
    case 1:
      t.portId = value
      break
    case 2:
      t.pierId = value
      break
    case 3:
      t.name = value
      break
    case 4:
      t.address = value
      break
    default:
  }
}

function editShipOnPier (shipId, status) {
  const t = ActiveShips.find((p) => p.shipId === shipId)
  t.shipOnPier = status
}

function editShip (criteria, PositionToChange, value) {
  const t = Ships.find((p) => p.shipId === criteria || p.name === criteria || p.company === criteria)
  switch (PositionToChange) {
    case 1:
      t.shipId = value
      break
    case 2:
      t.name = value
      break
    case 3:
      t.company = value
      break
    default:
  }
}

// Видалення
function deletePort (portId) {
  Ports = Ports.filter((p) => p.portId !== portId)
}

function deleteShip (shipId) {
  Ships = Ships.filter((p) => p.shipId !== shipId)
}

function deletePierFromPort (portId, pierId) {
  const port = findPort(portId)
  const pier = port.pierId.find(element => element === pierId)
  if (port !== undefined && pier !== undefined) {
    port.pierId = port.pierId.filter((p) => p !== pierId)
  } else {
    console.log(
      'Error. Pier ' + pierId + ' doesn`t exist in port. It must be unique!'
    )
  }
}

// Додавання в колекції
addShip(1, 'u', 'u')
addShip(2, 'o', 'o')
addShip(3, 'p', 'p')

addPier(1, 'a', 'a')
addPier(2, 'g', 'g')
addPier(3, 'k', 'k')

addPort(1, [1, 2], 'r', 'r')
addPort(2, 1, 'c', 'c')
addPort(3, [], 'v', 'v')

addActiveShip(1, 1)
addActiveShip(2, 2)
addActiveShip(3, 2)

// Вивід
console.log(Ships)
console.log('\n')
console.log(Piers)
console.log('\n')
console.log(Ports)
console.log('\n')
console.log(ActiveShips)
console.log('\n')

// Редагування
editPort(1, 3, 'rr')
editPort(2, 3, 'cc')

editShip(1, 2, 'uu')
editShip(2, 2, 'oo')

editShipOnPier(1, true)

// Вивід
console.log(Ports)
console.log('\n')
console.log(Ships)
console.log('\n')
console.log(ActiveShips)
console.log('\n')

// Видалення
deletePort(3)
deleteShip(3)

// Вивід
console.log(Ports)
console.log('\n')
console.log(Ships)
console.log('\n')

// Пошук
console.log(findPort(1))
console.log('\n')
console.log(findShip(2))
console.log('\n')
console.log(findAllShipsOnPier(2))
console.log('\n')

addPierToPort(1, 3)
console.log(Ports)
console.log('\n')

deletePierFromPort(1, 3)
console.log(Ports)
