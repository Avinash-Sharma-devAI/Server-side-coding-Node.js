// we will create CLI to calculate the sum of two numbers using node.js
//Import module- Readline

const readLine=require("readline");

//to configure the interface for input and output

const interface=readLine.createInterface({input: process.stdin, output: process.stdout});

interface.question("Enter the first number:",(num1)=>{
    interface.question("Enter the second number:",(num2)=>{

        sum=parseInt(num1)+parseInt(num2);
        console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    });
})