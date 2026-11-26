// const arithmeticModule=require("./module");// require runs the module.js file and it runs once and returns the object which is exported from module.js file. Here the object is {add: sum, divide: divide} and it is stored in the variable "arithmeticModule".

//import * as arithmeticModule from "./module.mjs"; // here we are importing all the exported functions from module.js file and storing them in the variable "arithmeticModule". Now we can access the exported functions using this variable.
import {sum} from "./module.mjs"; // here we are importing only the "sum" function from module.js file and storing it in the variable "sum". Now we can access the "sum" function using this variable.
//const result=arithmeticModule.sum(10,20); // here "add" though written as a function, is a property of the object "arithmeticModule" which is exported from module.js file.
const result=sum(10,20); // here "sum" is a function which is imported from module.js file and we are calling it with arguments 10 and 20. The result of the function call is stored in the variable "result".
console.log(result);


// why .mjs? 
// .mjs extension is used to indicate that the file is a JavaScript module and should be treated as such. This is necessary when using ES6 module syntax (import/export) instead of CommonJS syntax (require/module.exports).
