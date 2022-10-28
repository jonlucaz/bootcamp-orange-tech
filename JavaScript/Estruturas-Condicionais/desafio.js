const etanol = 3.37;
const gasolina = 4.8;
const gastoMedio = 10;
const diastancia = 100;
let gastoAlcool = (etanol * diastancia) / gastoMedio;
let gastoGaso = (gasolina * diastancia) / gastoMedio;
let tipoCombustivel = "gasolina";
if (tipoCombustivel === "alcool") {
  console.log("O gasto total é de R$" + gastoAlcool.toFixed(2));
} else {
  console.log("O gasto total é de R$" + gastoGaso.toFixed(2));
}
