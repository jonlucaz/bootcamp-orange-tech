const { gets, print } = require("./aula");

const sorteio = [];

for (let i = 0; i < 5; i++) {
  const sorteios = gets();
  sorteio.push(sorteios);
}

let maiorValor = 0;

for (let i = 0; i < sorteio.length; i++) {
  const sorteios = sorteio[i];
  if (sorteios > maiorValor) {
    maiorValor = sorteios;
  }
}

print(maiorValor);
