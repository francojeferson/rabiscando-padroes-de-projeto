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
    return this.valor * 0.05; //O frete comum custa 5% o valor do pedido.
  }

  calculaFreteExpresso() {
    return this.valor * 0.1; //O frete comum custa 10% o valor do pedido.
  }
}
