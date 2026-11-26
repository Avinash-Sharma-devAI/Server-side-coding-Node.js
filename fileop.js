const fs=require('fs');

//using blocking code- managed by the main thread

// console.log("Start of the program");
// const data=fs.readFileSync("data.txt", encoding="utf-8");
// console.log(data);

console.log("another operation is performed");

// we are going to create a file using blocking code and then write some data into it

try{
        fs.writeFileSync("employee.txt", "Employee name is John and he is working in the IT department");
} catch(err){
    console.log("Error in writing the file", err);
}


//append another data into the file using blocking code

try{
    fs.appendFileSync("employee.txt", " and he is a senior software engineer");
} catch(err){
    console.log("Error in appending to the file", err);
}

//delete a file using blocking code

try{
    fs.unlinkSync("dididid.txt");
} catch(err){
    console.log("Error in deleting the file", err);
}
