const readline = require('readline-sync');

let x1: number = parseInt(readline.question("X1 = "));
let x2: number = parseInt(readline.question("X2 = "));

let sum: number = x1+x2;
print(x1.toString()+"+"+x2.toString()+"="+sum.toString());