/*
//  Código desenvolvido por mim para aprendizado

//  Classe automóvel
class automóvel {
    //  Parâmetros
    nome: string;
    cor: string;

    //  Método construtor
    constructor(nome: string, cor: string) {
        //  Variáveis
        this.nome = nome;
        this.cor = cor;
    }
}
const automóvel1 = new automóvel("Avião", "vermelho");
console.log(automóvel1);


//  Extensão de automóvel para carro
class carro extends automóvel {
    rodas: number;
    placa: string;

    //  Herda os parâmetros NOME e COR da classe automóvel ++ os novos parâmetros RODAS e PLACA
    constructor(nome: string, cor: string, rodas: number, placa: string) {
        super(nome, cor);
        this.rodas = rodas;
        this.placa = placa;
    }
}
const carro1 = new carro("COMANDER", "preto", 4, "YAN-1234");
console.log(carro1);
*/

//  Atividade

class Pessoa {
    nome: string;
    private idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Bem vindo ${this.nome}. Vejo que você tem ${this.idade} anos.`)
    }
}
const pessoa1 = new Pessoa("Yan", 23);
// pessoa1.apresentar();

class Aluno extends Pessoa {
    matrícula: string;
    constructor(nome: string, idade: number, matrícula: string) {
        super(nome, idade);
        this.matrícula = matrícula;
    }
    apresentar() {
        console.log(`Bem vindo ${this.nome}. Vejo que você tem ${this.idade} anos. A sua matrícula é: ${this.matrícula}`);
    }

    getIdade() {
        return this.idade;
    }
}
const aluno1 = new Aluno("Anna", 22, "abc0A");
aluno1.getIdade();