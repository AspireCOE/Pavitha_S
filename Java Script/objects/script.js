let item={
                       // key-value pair
    name:'phone',
    price:25000,
    quantity:1
}

console.log(item)

// another way to create object

let item2=new Object();

item2.name='charger'
item2.price=700
item2.quantity=1
console.log(item2)

// another way to change the value of the property

let key='price'
item[key]=27500
item.key=27500  // does not work

// adding new property
item.returnable=true
console.log(item)

// object inside object

let item3={
    // key-value pair
name:'phone',
price:25000,
quantity:1,
categories:['electronics','phones'],  // even we can add array as a value in the properties of the object
dimensions:{
    length:25,
    breadth:15,
    height:5
}
}
console.log("new model")
console.log(item3)
console.log(item3.dimensions)
console.log(item3.dimensions.length)

// adding functions inside the object
let item4={
    // key-value pair
name:'phone',
price:25000,
quantity:1,
categories:['electronics','phones'],  // even we can add array as a value in the properties of the object
dimensions:{
    length:25,
    breadth:15,
    height:5
},
buy:function()
{
    console.log('item added to cart')
},
addToList(){
    console.log("item added to the cart")
}
}

item4.buy()

item4.addToList()
