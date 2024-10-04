var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Forma = /** @class */ (function () {
    function Forma() {
    }
    Forma.prototype.calcularForma = function () {
        console.log('Tipo de forma desconhecida\n');
    };
    return Forma;
}());
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo(largura, altura) {
        var _this = this;
        _this = _super.call(this) || this,
            _this._altura = altura,
            _this._largura = largura;
        return _this;
    }
    Retangulo.prototype.calcularForma = function () {
        var area = this._altura * this._largura;
        console.log("\u00C1rea do ret\u00E2ngulo: ".concat(area, "\n"));
    };
    return Retangulo;
}(Forma));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(raio) {
        var _this = this;
        _this = _super.call(this) || this,
            _this._raio = raio;
        return _this;
    }
    Circulo.prototype.calcularForma = function () {
        var area = Math.PI * this._raio;
        console.log("\u00C1rea do c\u00EDrculo: ".concat(area.toFixed(2), "\n"));
    };
    return Circulo;
}(Forma));
var forma = new Forma();
forma.calcularForma();
var retangulo = new Retangulo(10, 5);
retangulo.calcularForma();
var circulo = new Circulo(5);
circulo.calcularForma();
