var Cumprimento = /** @class */ (function () {
    // metodo construtor
    function Cumprimento(_nome, _idade) {
        if (_nome === void 0) { _nome = ''; }
        if (_idade === void 0) { _idade = 0; }
        this.nome = _nome;
        this.idade = _idade;
    }
    // outro metodo
    Cumprimento.prototype.mostrarNomeIdade = function (_idade, _nome) {
        return ("A pessoa " + _nome + " tem " + _idade + " anos");
    };
    return Cumprimento;
}());
//  fim da definição da classe
//  invocando a  função e o resultado vai amrmazenar na variavel resposta
var resposta = new Cumprimento();
console.log(resposta.mostrarNomeIdade(56, "Silvia"));
