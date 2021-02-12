var readline = require('readline-sync');
var x1 = parseInt(readline.question("X1 = "));
var x2 = parseInt(readline.question("X2 = "));
var sum = x1 + x2;
print(x1.toString() + "+" + x2.toString() + "=" + sum.toString());
function print(str) {
    console.log(str);
}
