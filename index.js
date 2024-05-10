#!/usr/bin/env node
import inquirer from "inquirer";
const Num = await inquirer.prompt([
    { message: "Enter first number:", type: "number", name: "first" },
    { message: "Enter second number:", type: "number", name: "second" },
    {
        message: "Enter the operation",
        name: "operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (Num.operation === "Addition") {
    console.log(`The answer of sum is : ${Num.first + Num.second}`);
}
else if (Num.operation === "Subtraction") {
    console.log(`The answer of minuse is : ${Num.first - Num.second}`);
}
else if (Num.operation === "Multiplication") {
    console.log(`The answer of Product is : ${Num.first * Num.second}`);
}
else if (Num.operation === "Division") {
    if (Num.second === 0) {
        console.log("Error! Cannot divide by zero.");
    }
    else {
        console.log(`The answer of division is : ${Num.first / Num.second}`);
    }
}
console.log(Num);
