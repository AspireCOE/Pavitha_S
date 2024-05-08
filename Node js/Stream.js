//Streams -->Used for handling the large amount of data
const path=require("path");
const fs=require("fs");
const rs = fs.createReadStream(path.join(__dirname,'BigFile.txt'),'utf-8');
const ws = fs.createWriteStream(path.join(__dirname,'New_BigFile.txt'));

//Creates newFile and copies the data part-wise
rs.pipe(ws);