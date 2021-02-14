const readline = require('readline-sync');

let l: number = parseInt(readline.question("Lenght Square: "));
let w: number = parseInt(readline.question("Width Square: "));

let mySquare = new Square();
mySquare.setLenght(l);
mySquare.setWidth(w);
let S: number = mySquare.getS();
console.log("Площадь = "+S.toString());