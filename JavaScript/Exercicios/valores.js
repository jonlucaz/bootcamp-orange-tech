let precoProduto = 100;
const dez = (precoProduto * 10) / 100;
const aVista = precoProduto - dez;
const quinze = (precoProduto * 15) / 100;
const pixDinheiro = precoProduto - quinze;
const divideDuas = precoProduto;
const divideMais = precoProduto + dez;
let condicao = "Dividir mais";

if (condicao === "A vista") {
  console.log("Preço final R$" + aVista.toFixed(2));
} else if (condicao === "Pix/Dinheiro") {
  console.log("Preço final R$" + pixDinheiro.toFixed(2));
} else if (condicao === "Dividir duas vezes") {
  console.log(
    "Preço final R$" +
      divideDuas.toFixed(2) +
      ", parcela de R$" +
      (divideDuas / 2).toFixed(2)
  );
} else if (condicao === "Dividir mais") {
  console.log(
    "Preço final R$" +
      divideMais.toFixed(2) +
      ", parcela de R$" +
      (divideMais / 2).toFixed(2)
  );
}
