//to learn about modules in node js



//there are two ways to export modules in node js

//1. common js module system

// module.exports={add: sum, divide: divide};




//2. es6 module system


export function sum(a,b){
    return a+b;
}   

 export function divide(a,b){
    return a/b;
}


