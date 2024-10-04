var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (a, b, c) {
        (typeof c === 'undefined') ? console.log("Soma ".concat(a + b)) : console.log("Soma ".concat(a + b + c));
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
calculadora.somar(1, 2);
calculadora.somar(1, 2, 3);
