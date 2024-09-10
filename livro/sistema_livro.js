//classe chamada livro para 
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao, genero, disponivel) {
        this.titulo = titulo,
            this.autor = autor,
            this.anoPublicacao = anoPublicacao,
            this.genero = genero,
            this.disponivel = disponivel;
    }
    //métodos
    Livro.prototype.exibirInformacoes = function () {
        console.log("Livro:\n T\u00EDtulo: ".concat(this.titulo, ",\n Autor: ").concat(this.autor, ",\n Ano de publica\u00E7\u00E3o: ").concat(this.anoPublicacao, ",\n G\u00EAnero: ").concat(this.genero, ",\n Dispon\u00EDvel: ").concat(this.disponivel, "\n"));
    };
    Livro.prototype.emprestarLivro = function () {
        this.disponivel = false;
    };
    Livro.prototype.devolverLivro = function () {
        this.disponivel = true;
    };
    return Livro;
}());
var livro1 = new Livro('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 1997, 'Literatura fantástica', true);
livro1.emprestarLivro();
livro1.exibirInformacoes();
livro1.devolverLivro();
livro1.exibirInformacoes();
var livro2 = new Livro('Harry Potter e a Câmera Secreta', 'J.K. Rowling', 1998, 'Literatura fantástica', true);
livro2.emprestarLivro();
livro2.exibirInformacoes();
