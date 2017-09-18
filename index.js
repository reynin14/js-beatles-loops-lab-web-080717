function theBeatlesPlay(musicians, instruments){
  let result = []
    for (let i = 0; i < musicians.length; i++) {
      result.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return result
}

function johnLennonFacts(array){
  let newAry = []
  let i = 0
  while (i < array.length){
    newAry.push(`${array[i]}!!!`)
    i++
  }
  return newAry
}

function iLoveTheBeatles(n){
  let newAry = []
  do {
    newAry.push("I love the Beatles!")
    n++
  } while (n < 15)

  return newAry
}
