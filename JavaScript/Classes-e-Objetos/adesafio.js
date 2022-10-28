class Person {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  imc() {
    return this.peso / (this.altura * this.altura);
  }
}
const jose = new Person("José", 70, 1.75);
console.log(jose.imc().toFixed(2));
