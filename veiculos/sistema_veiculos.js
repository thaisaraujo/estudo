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
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, ano) {
        this._marca = marca;
        this._ano = ano;
    }
    Veiculo.prototype.informacoes = function () {
        console.log("Marca: ".concat(this._marca, "\nAno: ").concat(this._ano));
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, ano, modelo) {
        var _this = this;
        _this = _super.call(this, marca, ano) || this,
            _this._modelo = modelo;
        return _this;
    }
    Carro.prototype.informacoes = function () {
        console.log("Carro:\n Marca: ".concat(this._marca, "\n Ano: ").concat(this._ano, "\n Modelo: ").concat(this._modelo, "\n"));
    };
    return Carro;
}(Veiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, ano, cilindradas) {
        var _this = this;
        _this = _super.call(this, marca, ano) || this,
            _this._cilindradas = cilindradas;
        return _this;
    }
    Moto.prototype.informacoes = function () {
        console.log("Motor:\n Marca: ".concat(this._marca, "\n Ano: ").concat(this._ano, "\n Cilindradas: ").concat(this._cilindradas, "\n"));
    };
    return Moto;
}(Veiculo));
var carro = new Carro('Volkswagen', 1959, 'Fusca');
carro.informacoes();
var moto = new Moto('Moto do Hagrid', 1959, 500);
moto.informacoes();
