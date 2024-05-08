//We generally use node js for runtime javascript environment..
//It is open source , cross-platform .i.e it can be run in any os.

console.log("Welcome to Aspire");
//console.log(global);

//Local modules
const math=require("./math");
console.log(math.add(3,3));
console.log(math.subtract(3,3));
console.log(math.multiply(3,3));
console.log(math.divide(3,3));

//Method to find filename and dirname
console.log(__dirname);
console.log(__filename);
console.log("-------------------------------------------------------");

