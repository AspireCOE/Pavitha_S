// dynamically types language


console.log("Happy New Year")
        alert("HI")  //Statement line of code
    
        // variable -to store the data  // variables takes 8 bytes to store the value that is 64 bits
        let score=0 //initialization
        score=5  //assignment
        console.log("score is "+score);

       //exercis
       let amount=100
       console.log("The amount is "+amount)

       const pi=3.14

       var val=100  // rare case


       /*operators

       Arithmetic operators: + - * ** /% ++ --
       Assignment operators: = += -= /= *= %= **=
       Comparison operators: == === != !== > < >= <= ?
       == excluding type
       === including type 


       logical operator: && || !
       Bit wise Operator: & | ~ ^ << >> >>>

       special number
       5/0 stores the Infinity
       0/0 NaN - NOt a Number
       math.sqrt(-1) - NaN NOt a Number
       let b console.log(b) Undefined


       special Operator

       a=3
       typeof a-'number'

       auto type casting

       */

       /* Prompt*/
       let a=prompt('Enter the number')
       console.log(Number(a) * 30)

       //#DOM  Document Object Model

       let m=document.getElementById("message")
       m.innerHTML="Welcome to our website"