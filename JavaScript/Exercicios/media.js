const nota1 = 7;
const nota2 = 10;
const nota3 = 9;
media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("Reprovado");
} else if (media > 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}
