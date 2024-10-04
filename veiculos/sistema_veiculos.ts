class Veiculo {
    protected _marca: string;
    protected _ano: number;

    constructor(
        marca: string,
        ano: number,
    ) {
        this._marca = marca;
        this._ano = ano;
    }

    informacoes(): void {
        console.log(`Marca: ${this._marca}\nAno: ${this._ano}`);
    }
}

class Carro extends Veiculo {
    private _modelo: string;

    constructor(
        marca: string,
        ano: number,
        modelo: string
    ) {
        super(marca, ano),
        this._modelo = modelo
    }

    informacoes(): void {
        console.log(`Carro:\n Marca: ${this._marca}\n Ano: ${this._ano}\n Modelo: ${this._modelo}\n`);
    }
}

class Moto extends Veiculo {
    private _cilindradas: number;

    constructor(
        marca: string,
        ano: number,
        cilindradas: number
    ) {
        super(marca, ano),
        this._cilindradas = cilindradas
    }

    informacoes(): void {
        console.log(`Motor:\n Marca: ${this._marca}\n Ano: ${this._ano}\n Cilindradas: ${this._cilindradas}\n`);
    }
}

const carro = new Carro(
    'Volkswagen',
    1959,
    'Fusca'
)
carro.informacoes();

const moto = new Moto(
    'Moto do Hagrid',
    1959,
    500
)
moto.informacoes();