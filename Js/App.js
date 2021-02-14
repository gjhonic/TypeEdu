var Square = /** @class */ (function () {
    function Square() {
        this.lenght = undefined;
        this.width = undefined;
        this.width = undefined;
        this.lenght = undefined;
    }
    Square.prototype.setLenght = function (a) {
        if (a < 0) {
            console.log("Длина должна быть больше 0");
            return false;
        }
        else {
            this.lenght = a;
            return true;
        }
    };
    Square.prototype.setWidth = function (b) {
        if (b < 0) {
            console.log("Ширина должна быть больше 0");
            return false;
        }
        else {
            this.width = b;
            return true;
        }
    };
    Square.prototype.getLenght = function () {
        return this.lenght;
    };
    Square.prototype.getWidth = function () {
        return this.width;
    };
    Square.prototype.getS = function () {
        return this.width * this.lenght;
    };
    return Square;
}());
var readline = require('readline-sync');
var l = parseInt(readline.question("Lenght Square: "));
var w = parseInt(readline.question("Width Square: "));
var mySquare = new Square();
mySquare.setLenght(l);
mySquare.setWidth(w);
var S = mySquare.getS();
console.log("Площадь = " + S.toString());
