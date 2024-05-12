let priceUSD=[45,67,34]
let priceINR=priceUSD.map(x => x*83)// similar to for each loop
// map built the new array
console.log(priceINR)

priceINR=priceUSD.map(convert)// convert is a call back function

function convert(val)
{

    return val*83
}

console.log("convert",priceINR)

const input=[//array of objects
    {name:'John',age:45},
    {name:'Radha',age:56},
    {name:'kowshik',age:12},
    {name:'pranav',age:21},
    {name:'sree',age:26}

]
const ages=input.map(x=>x.age)
console.log(ages)


// filter the array   filter using the condition
let cost=[35,67,35,46,95,12,34,23,56]

let lessThan100=cost.filter(x=> x<50)

console.log(lessThan100)

//reduce  
cost=[35,67,35,46,95,12,34,23,56]

let cartTotal=cost.reduce((total,element)=>total+=element,0) // here 0 is initial element
console.log(cartTotal)

// flat and count the number of occurences in an array

arr2d=[['a','b','c'],
['c','d','f'],
['d','f','g']];
console.log(arr2d.flat())
let count=arr2d.flat().reduce(
    (cnt,currVal)=>{
        if(cnt[currVal])
            {
                cnt[currVal]++
            }
            else{
                cnt[currVal]=1
            }

            return cnt
    },{}
);
console.log(count)