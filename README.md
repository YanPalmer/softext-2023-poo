
* Crie uma classe chamada "Pessoa" que tenha os atributos "nome" e "idade". 
Em seguida, crie um objeto chamado "pessoa1" e atribua a ele um nome e uma idade.

* Na classe "Pessoa" criada anteriormente, adicione um método chamado "apresentar" que exiba no console
uma mensagem com o nome e a idade da pessoa.

* Crie uma classe chamada "Aluno" que herde da classe "Pessoa" (do exercício 1).
A classe "Aluno" deve ter um atributo adicional chamado "matricula".
Crie um objeto chamado "aluno1" que seja um aluno e imprima no console.

* Modifique a classe "Pessoa" para que o atributo "idade" seja privado.
Crie métodos getters e setters para acessar e alterar o valor da idade, respeitando o encapsulamento.

* Crie uma classe chamada "Animal" com um método chamado "falar".
Crie classes específicas que herdem de "Animal" (por exemplo: "Cachorro", "Gato", etc.)
e sobrescrevam o método "falar" para exibir o som característico de cada animal.

<!--
/*  Código escrito na aula para entender os conceitos
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, ${this.nome}. Sua idade é: ${this.idade}`);
    };
}

const pessoa1 = new Pessoa("Yan", 23);
console.log(pessoa1.nome, pessoa1.idade);
pessoa1.apresentar();
*/

/*
class Pessoa {
    nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    getIdade() {
        return this.idade;
    }

    setIdade(idade: number) {
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Yan", 23);
console.log(pessoa1.idade);
*/

/*
class ContaBancaria {
    private saldo: number;
    divida: number;

    constructor(saldo: number) {
        this.saldo = saldo;
        this.divida = 1000;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo: number) {
        this.saldo = saldo + this.saldo;
        console.log("O saldo foi alterado");
    }
}

const conta1 = new ContaBancaria(1500);
//conta1.saldo = conta1.saldo - 50;   // Não funciona pois está privado

console.log(conta1);
conta1.setSaldo(1000);
console.log(conta1);
*/


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
-->