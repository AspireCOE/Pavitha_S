//To avoid asynchrounous., callback, callback hell functions we can use promises for creating await...
const path=require("path");
const fsPromises=require("fs").promises;
const fileOps=async() => {
    try{
        const data=await fsPromises.readFile(path.join(__dirname,'Files','Message.txt'),'utf-8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'Files','Update.txt'),"Welcome to Chennai");
        console.log("Write Complete");
        await fsPromises.appendFile(path.join(__dirname,'Files','Update.txt'),"Thnaks for coming");
        console.log("Append Complete");
        await fsPromises.rename(path.join(__dirname,'Files','Update.txt'),path.join(__dirname,"Files",'Updation.txt'));
        console.log("Rename Complete");
        await fsPromises.unlink(path.join(__dirname,'Files','Rename.txt'),"Thnaks for coming");
        console.log("Deletion Complete");
    }
    catch(err){
        console.error(err);
    }
}
fileOps();
