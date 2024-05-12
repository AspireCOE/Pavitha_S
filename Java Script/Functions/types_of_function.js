// Function- performa a specific task can be called multiple items optionally takes input as parammeters

function isPositive(num)
{
    return num>0
}
console.log(isPositive(-1))

function sayHello()
{
    console.log("Hello")
}
sayHello()

console.log(findProduct(10,10))  //hoisting   even the defition is not here we can use it
function findProduct(a,b)
{
    return a*b
}

// default parameters
function greet(name='there')
{
    console.log("hi",name)
}
greet('pavi')
greet()

// recursion- function calling itself

// factorial of a number


function factorial(n)

{
    if(n==1)
        {
            return 1
        }
    return n* factorial(n-1)
}

console.log(factorial(5))

// function expression
// assigned to a variable as object

let a=100

let isEven=function(num)
{
    return num%2==0
}
console.log(isEven(5))
console.log(isEven)


// add the array elements

let arr=[2,3,4,5,6]
let findSum=function(arr)
{
    let sum=0;
    for(let val of arr)
        {
            sum+=val
        }
        return sum
}
console.log(findSum(arr))

// arrow function
let area=(l,b) =>{return l*b}

console.log(area(8,9))

// variable arguments - you can give n number of values

let prod=function(...args)
{
    let result=1
    for(let val of args)
        {

            result*=val
        }
        return result
}

// generators

function* indexGenerator()
{
   let index=1
   while(true)
    {
        yield index++    // instead of return we are using yield
    }
}

console.log("Generators are working under")
const gen=indexGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


// call back functions a function act as an paramater for another function is called call back function

function greetConsole(name)
{
    console.log('hello',name)
}

function greetHeading(name)
{
    const heading=document.querySelector('h1')
    heading.innerHTML='hello '+name
}


function greet(callback)
{
    callback()
}