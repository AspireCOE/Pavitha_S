//Creating String Array
let cityNames = ["Tirupur","Coimbatore","Erode"];

//Creating Integer Array
let markList = [89,92,94,96,100];

//length method - Finding total elements in an array
console.log(cityNames.length);
console.log(markList.length);

//Accesing elements in array is performed with the help of index value statrting from 0
console.log(cityNames[1]);
console.log(markList[markList.length-1]);

//mixing of int and string in array-->Heterogeneous
let getDetails=["Vishnu","Male",22,["Student",56]];
console.log(getDetails);
console.log(getDetails[3]);
console.log(getDetails[3][1]);

//2-Dimensional Array
let matrixNumbers=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrixNumbers[2][2]);

//Array methods
let arrayList=['a','b','c','d','e'];

//1.push method -->Add element at last and returns the new length
arrayList.push('f');
console.log(arrayList);

//2.pop method -->Removes element from last and returns the removed value
console.log(arrayList.pop());
console.log(arrayList);

//3.shift method -->Removes elememt from start and returns the removed value
console.log(arrayList.shift());
console.log(arrayList);

//4.unshift method -->Add element from first and returns the new length
console.log(arrayList.unshift('v'));
console.log(arrayList);

//5.delete method -->Deletes element but does not any shifting occurs
//delete arrayList[2];
//console.log(arrayList);

//6.splice method -->helps to insert and delete element at the middle of the array
//1st parameter -->starting index
//2nd parameter -->numbers of elements
//3rd parameter -->value to get inserted
arrayList.splice(2,1);
console.log(arrayList);

//Replacement
arrayList.splice(2,1,'m');
console.log(arrayList);

//Number of elements deletes and inserted
arrayList.splice(3,2,'x','y');
console.log(arrayList);

//7.slice(starting index,ending index) -->ending index is not included (For creating sub arrays)
console.log(arrayList.slice(1,3));

//8.Reverse method -->Reverse the elements in an array
console.log(arrayList.reverse());

//9.join method -->Converts array to string
let stringValue=arrayList.join();
console.log(stringValue);

//10.split method -->Converts string to array
let newArray=stringValue.split(',');
console.log(newArray);

//11.concat and  spread method -->helps to join two arrays
let firstArray=[1,2,3];
let secondArray=[4,5,6];
let joinedArray=firstArray.concat(secondArray);
console.log(joinedArray);
let joinedArray2=[...firstArray,...secondArray];
console.log(joinedArray2);