export default class Pedido {
  constructor() {
    this.valor = 0;
  }

  getValor() {
    return this.valor;
  }

  setValor(valor) {
    this.valor = valor;
  }

  calculaFreteComum() {
    //A implementação deste método passa a ser responsabilidade das subclasses.
  }

  calculaFreteExpresso() {
    //A implementação deste método passa a ser responsabilidade das subclasses.
  }
}
