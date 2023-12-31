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

  //A implementação deste método passa a ser responsabilidade das subclasses.
  abstract calculaFreteComum(): number;

  //A implementação deste método passa a ser responsabilidade das subclasses.
  abstract calculaFreteExpresso(): number;
}
