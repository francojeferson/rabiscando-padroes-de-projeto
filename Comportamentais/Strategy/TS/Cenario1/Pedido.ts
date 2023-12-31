export default class Pedido {
  protected valor: number;

  constructor() {
    this.valor = 0;
  }

  public getValor(): number {
    return this.valor;
  }

  public setValor(valor: number): void {
    this.valor = valor;
  }

  public calculaFreteComum(): number {
    return this.valor * 0.05; //O frete comum custa 5% o valor do pedido.
  }

  public calculaFreteExpresso(): number {
    return this.valor * 0.1; //O frete comum custa 10% o valor do pedido.
  }
}
