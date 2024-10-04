class Forma {
    calcularForma(): void {
        console.log('Tipo de forma desconhecida\n');
    }
}

class Retangulo extends Forma {
    private _largura: number;
    private _altura: number;

    constructor(
        largura: number,
        altura: number
    ) {
        super(),
        this._altura = altura,
        this._largura = largura
    }

    calcularForma(): void {
        let area = this._altura*this._largura;
        console.log(`Área do retângulo: ${area}\n`);
    }
}

class Circulo extends Forma {
    private _raio: number;

    constructor(
        raio: number
    ) {
        super(),
        this._raio = raio
    }

    calcularForma(): void {
        let area = Math.PI*this._raio;
        console.log(`Área do círculo: ${area.toFixed(2)}\n`);
    }
}

const forma = new Forma();
forma.calcularForma();

const retangulo = new Retangulo(10,5);
retangulo.calcularForma();

const circulo = new Circulo(5);
circulo.calcularForma();