//2.Path module -->helps to find the directory name, file name and extension name
const path=require("path");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));  //Gives a complete object for the filename