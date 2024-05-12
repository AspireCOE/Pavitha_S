/* Math inbuild function*/

console.log(Math.PI)
console.log(Math.round(5.8))
console.log(Math.round(5.1))
console.log(Math.floor(5.8))
console.log(Math.floor(5.1))
console.log(Math.ceil(5.8))
console.log(Math.ceil(5.1))
console.log(Math.abs(-9))
console.log(Math.pow(8,5))
console.log(Math.sqrt(105))

console.log("Function is calling")
roll()
roll()
roll()
// Math.random to roll a dice

function roll()
{
    console.log(Math.floor(Math.random()*6+1))
}