export default class Pedido {
  constructor() {
    this.valor = 0;
    this.tipoFrete = null;
  }

  getValor() {
    return this.valor;
  }

  setValor(valor) {
    this.valor = valor;
  }

  calculaFrete() {
    return this.tipoFrete.calcula(this.valor);
  }
}
