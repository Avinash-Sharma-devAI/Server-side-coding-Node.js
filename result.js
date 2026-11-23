const arithmeticModule=require("./module");


const result=arithmeticModule.add(10,20); // here "add" though written as a function, is a property of the object "arithmeticModule" which is exported from module.js file.

console.log(result);