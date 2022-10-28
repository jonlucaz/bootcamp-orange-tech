const valorCombustive = 4.89;
let kmPorLitro = 10;
let distancia = 483;

let valorFinal = (valorCombustive * distancia) / kmPorLitro;

console.log("O valor final de sua viagem será de R$" + valorFinal.toFixed(2));
