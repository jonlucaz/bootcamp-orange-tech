class carro {
  marca;
  modelo;
  ano;
  mediaConsumo;

  constructor(marca, modelo, ano, mediaConsumo) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.mediaConsumo = mediaConsumo;
  }

  gasto(distancia, valorComb) {
    return distancia * this.mediaConsumo * valorComb;
  }
}

const gol = new carro("Volksvagem", "Gol", 2010, 1 / 12);
console.log(gol);
console.log(gol.gasto(70, 4.79));
