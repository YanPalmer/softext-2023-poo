/*
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