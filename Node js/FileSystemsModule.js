//3.File Systems Module -->Helps to read and write file in node js
//Note --> we should perform orderly because it is asynchronous
const fs=require("fs");
const path=require("path"); //It helps to drag the accurate path for the file systems
const { compileFunction } = require("vm");

//Read Files
fs.readFile(path.join(__dirname,'Files','Message.txt'),(err,data) =>{
    if(err) throw err;
    console.log(data);  //Byte code format
    console.log(data.toString());//Instead we use utf-8
}
);
//Exit on uncaught errors
process.on("uncaughtException",err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1);
});

//Write files
fs.writeFile(path.join(__dirname,'Files','Update.txt'), "Hello All...", err =>{
    if(err) throw err;
    console.log("Write Complete");
    //We can also create and update using append method
    fs.appendFile(path.join(__dirname,'Files','Update.txt'), "Good Morning...", err =>{
        if(err) throw err;
        console.log("Append Complete");
    });
});
//Exit on uncaught errors
process.on("uncaughtException",err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1);
});

//Uses callback function and callback hell
fs.writeFile(path.join(__dirname,'Files','Update1.txt'), "Hello All...", err =>{
    if(err) throw err;
    console.log("Write Complete");
    //We can also create and update using append method
    fs.appendFile(path.join(__dirname,'Files','Update1.txt'), "Good Morning...", err =>{
        if(err) throw err;
        console.log("Append Complete");
    });
    fs.rename(path.join(__dirname,'Files','Update1.txt'), path.join(__dirname,'Files','Rename.txt'), err =>{
        if(err) throw err;
        console.log("Rename Complete");
    });
});
//Exit on uncaught errors
process.on("uncaughtException",err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1);
});