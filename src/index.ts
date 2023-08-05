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

/* ======================================= */

//  Atividade 01

console.log("Atividade 01");
class Pessoa {
    nome: string;
    private idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Bem vindo ${this.nome}. Vejo que você tem ${this.idade} anos.`);
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade: number) {
        this.idade = idade;
    }
}
const pessoa1 = new Pessoa("Yan", 23);
pessoa1.apresentar();

class Aluno extends Pessoa {
    matrícula: string;
    constructor(nome: string, idade: number, matrícula: string) {
        super(nome, idade);
        this.matrícula = matrícula;
    }
}
const aluno1 = new Aluno("Anna", 22, "A0005");
console.log(aluno1.getIdade()); // Idade atual
aluno1.setIdade(14)             // Altera a idade
console.log(aluno1.getIdade());      // Mostra a idade atual de aluno1
console.log();



//  Atividade 02

console.log("Atividade 02")
class Animal {
    nomeAnimal: string;
    somAnimal: string;
    constructor(nomeAnimal: string, somAnimal: string) {
        this.nomeAnimal = nomeAnimal;
        this.somAnimal = somAnimal;
    }

    fala() {
        console.log(`O ${this.nomeAnimal} faz: ${this.somAnimal}`)
    }
}


class Cachorro extends Animal {

    constructor(nomeAnimal: string, somAnimal: string) {
        super(nomeAnimal, somAnimal)
    }
}
const animal1 = new Cachorro("Toby", "Au au");  // Declara o nome e o som do animal
animal1.fala()


class Gato extends Animal {
    
    constructor(nomeAnimal: string, somAnimal: string) {
        super(nomeAnimal, somAnimal)
    }
}
const animal2 = new Gato("Gato", "Miau");
animal2.fala();

class Vaca extends Animal {

    constructor(nomeAnimal: string, somAnimal: string) {
        super(nomeAnimal, somAnimal)
    }
}
const animal3 = new Vaca("Vaca", "Muuuu");
animal3.fala();