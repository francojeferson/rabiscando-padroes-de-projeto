import Gateway from './Gateway';

export default abstract class Pagamento {
  protected valor: number;
  protected gateway: Gateway;

  constructor(valor: number, gateway: Gateway) {
    this.valor = valor;
    this.gateway = gateway;
  }

  // Hook (gancho) - Implementação Mínima. Pode ser sobreescrito pelas subclasses.
  calcularTaxa(): number {
    return 0;
  }

  // Será implementado pelas subclasses.
  abstract calcularDesconto(): number;

  realizaCobranca(): boolean {
    const valorFinal =
      this.valor + this.calcularTaxa() - this.calcularDesconto();

    //-- Início da impressão dos valores separados (Apenas para visualização)
    console.log(
      `${this.valor} + ${this.calcularTaxa()} - ${this.calcularDesconto()} = `,
    );
    //-- Fim da impressão dos valores separados

    return this.gateway.cobrar(valorFinal);
  }
}
