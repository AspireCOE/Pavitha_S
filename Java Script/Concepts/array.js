// Arrays in java script


let cities=["chennai", "Trichy", "Dharmapuri"]

let marks=[76,98,54,67,99]

console.log(marks.length)
console.log(cities[2])
console.log(cities)

// last element
console.log(marks[marks.length-1])

// mix of int and string

let arr=[4,5,"pavitha","trichy",[3,4,5]]
console.log(arr)
console.log(arr[4][2])

// 2d array
 let matrix=[[1,2,3],[4,5,6],[7,8,9]]
 console.log(matrix[1][1])

 // array methods
 let array=['a','b','c','d','e']

      //push=add element to the end
    array.push('f')
    console.log(array)

    // pop to remove the last element in the array

    array.pop()

    // shift to remove the first element in the array

    array.shift()

    // to insert the element in the first position
    array.unshift('a')

    // delete the element in the array

    delete array[2]
    console.log(array)   // it wont shift the element better not to use
  

    // splice  instead of delete
    /* using splice you can insert delete and replace */

    array.splice(2,1)   // ( position to start, how many element to be deleted)
    
    array.splice(3,1,'p') // (position to start, how many elements to be deleted, the element to be inserted instead of deleted elements)

    array.splice(3,2,'p','s') //(position to Start, how many elements to be deleted, continued by the elements to be inserted instead of deleted elements)

    console.log(array)

    // sliceing(startindex, end index)

    console.log(array.slice(1,2))

    // reverse

    array.reverse()
    console.log(array)  // reverse the array permanently

    // join - convert array to string

    let str=array.join()
    console.log(str)

    // split- convert string to array

    let str3="p,a,v,i"
    let arr3=str3.split(",")
    console.log(arr3)


    // concat and spread operator

    let firstarr=[1,2,3]
    let secondarr=[4,5,6]

    let joinedArr=[firstarr,secondarr]

    console.log(joinedArr)   // it gives 2d array

    let joinedarr=firstarr.concat(secondarr)  // concat gives it in single array
    console.log(joinedarr)

    let joined=[...firstarr,...secondarr]
    console.log(joined)










     