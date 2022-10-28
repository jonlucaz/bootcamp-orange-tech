const produto = 200;
let numeroParcelas = 5;

function desconto(percente) {
  percente = (produto * percente) / 100;
  return produto - percente;
}
function juros(percente) {
  percente = (produto * percente) / 100;
  if (numeroParcelas > 2) {
    return (produto + percente) / numeroParcelas;
  } else {
    return produto / numeroParcelas;
  }
}
function valorFinal(produto, numeroParcelas, debito) {
  if (numeroParcelas > 2) {
    return produto + debito;
  } else {
    return produto;
  }
}

const debito = 10;
const pix = 15;

console.log(
  "O seu desconto foi de " +
    debito +
    "%, e o valor final é de R$" +
    desconto(debito).toFixed(2)
);

console.log(
  "O seu desconto foi de " +
    pix +
    "%, e o valor final é de R$" +
    desconto(pix).toFixed(2)
);
console.log(
  "Você está dividindo em " +
    numeroParcelas +
    " parcelas, e o valor da parcela é de R$" +
    juros(debito).toFixed(2) +
    ", o valor final é de R$" +
    valorFinal(200, numeroParcelas, debito)
);
