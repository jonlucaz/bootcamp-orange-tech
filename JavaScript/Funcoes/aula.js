//sintaxe: function teste(){
//  console.log('teste')
//}
//teste()

function subJuros(valor, percent) {
  const calculo = (valor * percent) / 100;
  return valor - calculo;
}

console.log(subJuros(100, 10));
