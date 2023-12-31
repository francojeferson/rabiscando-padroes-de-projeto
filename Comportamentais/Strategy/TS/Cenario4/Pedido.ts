import Frete from './Frete';

export default class Pedido {
  protected valor: number;
  protected tipoFrete: Frete;

  constructor() {
    this.valor = 0;
  }

  getValor(): number {
    return this.valor;
  }

  setValor(valor: number): void {
    this.valor = valor;
  }

  // Define o tipo de frete.
  setTipoFrete(tipoFrete: Frete): void {
    this.tipoFrete = tipoFrete;
  }

  // Calcula o frete de acordo com a classe Frete recebida.
  calculaFrete(): number {
    return this.tipoFrete.calcula(this.valor);
  }
}
