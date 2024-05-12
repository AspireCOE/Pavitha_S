let user1={
    name:'JOhn',
    age:21,
    login(){
        console.log('You are logged in')
    },
    logout()
    {
        console.log('You are logged out')
    }

}
let user2={
    name:'Pranav',
    age:20,
    login(){
        console.log(this.name)
        console.log('You are logged in')
    },
    logout()
    {
        console.log('You are logged out')
    }

}
let user3={
    name:'Pavi',
    age:21,
    login(){
        console.log('hi',this.name)
        console.log('You are logged in')
    },
    logout()
    {
        console.log('You are logged out')
    }

}

user3.login()

class User{   //template  // parent class

    static numberOfUsers=0;
    constructor(name,age){

        //instance variables
        this.name=name
        this.age=age
        User.numberOfUsers++

    }
    login()   //methods
    {
        console.log('You are logged in')
    }
    logout()
    {
        console.log('You are logged out')
    }
    static displayTotalUser()
    {
        console.log(this.numberOfUsers)
    }

}

let userone=new User('vidya',21)
let usertwo=new User('Ramesh',22)
console.log(User.numberOfUsers)
console.log(User.displayTotalUser())


// Inheritance

class Paiduser extends User{  //child class
    constructor(name,age)
    {
        super(name,age)
        this.storage=100
    }
    message()
    {
        console.log("you have 100gb free storage")
    }
    login()  // method overriding
    {
        console.log("Thank you for user support")
        return this
    }


}

let paiduser1=new Paiduser();
paiduser1.login()
paiduser1.message()

// method chaining

paiduser1.login().message()

// get and set in java script

class Temperature
{
    constructor(temp)
    {
     
        this._temp=temp
    }
    get()
    {
        return this._temp
    }
    set(temp)
    {
        if(temp>100)
            {
                temp=100
            }
        this._temp=temp
    }
}
// export, import type='modules' in html src link