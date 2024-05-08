const fs=require("fs");
//Making Directory
 if(!fs.existsSync("./New")){
    fs.mkdir("./New",(err) => {
        if(err) throw err;
        console.log("Directory created");
    });
 }

 //Uncaught Errors
process.on("uncaughtException",err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1);
});

//Removing Directory
if(fs.existsSync("./New")){
    fs.rmdir("./New",(err) => {
        if(err) throw err;
        console.log("Directory Removed");
    });
 }

 //Uncaught Errors
process.on("uncaughtException",err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1);
});