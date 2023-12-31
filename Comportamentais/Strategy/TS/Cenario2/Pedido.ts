export default abstract class Pedido {
  protected valor: number;

  constructor() {
    this.valor = 0;
  }

  getValor(): number {
    return this.valor;
  }

  setValor(valor: number): void {
    this.valor = valor;
  }

  calculaFreteComum(): number {
    return this.valor * 0.05; //O frete comum custa 5% o valor do pedido.
  }

  calculaFreteExpresso(): number {
    return this.valor * 0.1; //O frete comum custa 10% o valor do pedido.
  }
}
