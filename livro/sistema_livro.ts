//classe chamada livro para 

class Livro {
    //atributos
    private titulo: string;
    private autor: string;
    private anoPublicacao: number;
    private genero: string;
    private disponivel: boolean;

    constructor(
        titulo: string,
        autor: string,
        anoPublicacao: number,
        genero: string,
        disponivel: boolean
    ) {
        this.titulo = titulo,
        this.autor = autor,
        this.anoPublicacao = anoPublicacao,
        this.genero = genero,
        this.disponivel = disponivel
    }

    //métodos
    exibirInformacoes(): void {
        console.log(`Livro:\n Título: ${this.titulo},\n Autor: ${this.autor},\n Ano de publicação: ${this.anoPublicacao},\n Gênero: ${this.genero},\n Disponível: ${this.disponivel}\n`)
    }

    emprestarLivro(): void {
        this.disponivel = false;
    }

    devolverLivro(): void {
        this.disponivel = true; 
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