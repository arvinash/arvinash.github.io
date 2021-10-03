console.clear()

  const array = [30,15]


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
console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`) 

const minUsingReduce = () => array.reduce((min, currentValue) => Math.min(min, currentValue), array[0])
const maxUsingReduce = () => array.reduce((max, currentValue) => Math.max(max, currentValue), array[0])
console.log(`Minimum: ${minUsingReduce()}, Maximum: ${maxUsingReduce()}`) 
console.log(avgg)
