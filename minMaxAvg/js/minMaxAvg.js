console.clear()

const array = [37,-5,-15,-37,5,15]

const forLoopMinMax = () => {
  let min = array[0], max = array[0]
  let avg

  for (let i = 1; i < array.length; i++) {
    let value = array[i]
    min = (value < min) ? value : min
    max = (value > max) ? value : max
    avgg=max/min
  }

  return [min, max,avg]
}

const [forLoopMin, forLoopMax] = forLoopMinMax()
console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`) // Minimum: -37, Maximum: 37

const minUsingReduce = () => array.reduce((min, currentValue) => Math.min(min, currentValue), array[0])
const maxUsingReduce = () => array.reduce((max, currentValue) => Math.max(max, currentValue), array[0])
console.log(`Minimum: ${minUsingReduce()}, Maximum: ${maxUsingReduce()}`) // Minimum: -37, Maximum: 37
console.log(avgg)
