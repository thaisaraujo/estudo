var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao, genero, disponivel) {
        this._titulo = titulo,
            this._autor = autor,
            this._anoPublicacao = anoPublicacao,
            this._genero = genero,
            this._disponivel = disponivel;
    }
    //métodos
    Livro.prototype.exibirInformacoes = function () {
        console.log("Livro:\n T\u00EDtulo: ".concat(this._titulo, ",\n Autor: ").concat(this._autor, ",\n Ano de publica\u00E7\u00E3o: ").concat(this._anoPublicacao, ",\n G\u00EAnero: ").concat(this._genero, ",\n Dispon\u00EDvel: ").concat(this._disponivel ? 'sim' : 'não', "\n"));
    };
    Livro.prototype.emprestarLivro = function () {
        if (this._disponivel)
            this._disponivel = false;
        else
            console.log('Livro indisponível');
    };
    Livro.prototype.devolverLivro = function () {
        this._disponivel = true;
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
livro2.emprestarLivro();
