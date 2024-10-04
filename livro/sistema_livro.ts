class Livro {
    //atributos
    private _titulo: string;
    private _autor: string;
    private _anoPublicacao: number;
    private _genero: string;
    private _disponivel: boolean;

    constructor(
        titulo: string,
        autor: string,
        anoPublicacao: number,
        genero: string,
        disponivel: boolean
    ) {
        this._titulo = titulo,
        this._autor = autor,
        this._anoPublicacao = anoPublicacao,
        this._genero = genero,
        this._disponivel = disponivel;
    }

    //métodos
    exibirInformacoes(): void {
        console.log(`Livro:\n Título: ${this._titulo},\n Autor: ${this._autor},\n Ano de publicação: ${this._anoPublicacao},\n Gênero: ${this._genero},\n Disponível: ${this._disponivel ? 'sim' : 'não'}\n`)
    }

    emprestarLivro(): void {
        if (this._disponivel) 
            this._disponivel = false;
        else 
            console.log('Livro indisponível');
    }

    devolverLivro(): void {
        this._disponivel = true; 
    }

}

const livro1 = new Livro(
    'Harry Potter e a Pedra Filosofal',
    'J.K. Rowling',
    1997,
    'Literatura fantástica',
    true
);

livro1.emprestarLivro();
livro1.exibirInformacoes();
livro1.devolverLivro();
livro1.exibirInformacoes();


const livro2 = new Livro(
    'Harry Potter e a Câmera Secreta',
    'J.K. Rowling',
    1998,
    'Literatura fantástica',
    true
);

livro2.emprestarLivro();
livro2.exibirInformacoes();
livro2.emprestarLivro();