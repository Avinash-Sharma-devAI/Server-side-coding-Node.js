const fs=require('fs');

//using blocking code- managed by the main thread

console.log("Start of the program");
const data=fs.readFileSync("data.txt", encoding="utf-8");
console.log(data);

console.log("another operation is performed");