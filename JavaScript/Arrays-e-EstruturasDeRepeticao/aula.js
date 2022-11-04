//Colchetes é uma lista em JS []
//string é uma lista especial, pode ser executado todas as ferramentas usadas em listas

const notas = [];

notas.push(3);
notas.push(9);
notas.push(7);
notas.push(6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

const media = soma / notas.length;
console.log("nota: " + media.toFixed(2));

if (media >= 6) {
  console.log("Parabéns, você foi aprovado!");
} else {
  console.log("Você foi reprovado");
}
