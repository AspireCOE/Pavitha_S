// loops in java script
let i=0;

// for loop in java script

for(i=1;i<=5;i++)
    {
        console.log("Hello")
    }

    for(i=1;i<=10;i++)
        {
            console.log(i)
        }

    for(i=10;i>0;i--)
        {
            console.log(i)
        }
    
        // while loop in java script
        i=10
        while(i>=1)
            {
                console.log(i)
                i--
            }
            console.log("end of the while loop",i)
        
            // do while loop
            do{
                console.log(i)
                i++
            }while(i<=7)
                console.log("End of the do while loop",i)

        // break to stop the loop
    
      /*  while(true)
            {
                let num=Number(prompt('enter a number'))      // some error need to clarify
                if(!isNaN(num))
                    {
                        break;
                    }
            }*/
    
            // continue - to skip the current iteration
            console.log("continue demo")
        for(i=1;i<=10;i++)
            {
                if(i%3==0)
                    {
                        continue
                    }
                    console.log(i)
            }
        // to access the array elements

        let arr=['apple','orange','banana','berry']
        for(i=0;i<arr.length;i++)
            {
                console.log(arr[i].toUpperCase())
            }

            // another way to access array element like for each loop
            for(let fruit of arr)   // for of loop
                {
                    console.log(fruit)
                }

        // let in loop to access the object elements

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
        for(let key in item3)
            {
                console.log(key)
                console.log(item3[key])
            }
        
        