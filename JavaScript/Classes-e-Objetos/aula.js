/*
//Objetos
const pessoa = {
  nome: "Jonathan Lucas",
  idade: 25,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};
/*
console.log(jonathan.nome);
console.log(jonathan.idade);
console.log(jonathan);

//apos declarar o objeto podemos acrescentar caracteristicas na classe de forma mais dinamica

jonathan.altura = 1.74;
console.log(jonathan.altura);
console.log(jonathan);

//é possível deletar da mesma forma

delete jonathan.altura;
console.log(jonathan);*/

//Classe: Para evitar repetição do código criamos uma classe para definir algo mais amplo e instâncias que vão ser servidas dessa classe
//Exemplo: classe pessoa e instancia jonathan,  jonathan é uma pessoa e tem caracteristicas gerais que tem nessa classe

class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const jon = new Pessoa("Jonathan", 25);
const luiza = new Pessoa("Luiza", 25);

jon.descrever();
luiza.descrever();
