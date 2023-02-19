function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));// випадковий індекс від 0 до i
    // поміняти елементи місцями
    // ми використовуємо для цього синтаксис "деструктивне присвоєння"
    // докладніше про нього - в наступних розділах
    // те ж саме можна записати як:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const arr = ['r', 44, 56, 78, 2, 3]
for (let i = 0; i < 10; i++) {
  console.log(shuffle(arr))
}
