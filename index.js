// Code your solutions in this file
function writeCards(names, word) {
  let arr = [];
  // for (let i = 0; i < names.length(); i++) {
  //   arr.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`)
  // }
  let i = 0
  while (i < names.length) {
    arr.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`)
    i++
  }
  arr
}

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i)
  }
}