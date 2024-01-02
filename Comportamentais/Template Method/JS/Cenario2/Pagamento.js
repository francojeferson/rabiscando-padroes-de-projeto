import Gateway from './Gateway.js';

export default class Pagamento {
  valor = 0;
  gateway = new Gateway();

  constructor(valor, gateway) {
    this.valor = valor;
    this.gateway = gateway;
  }

  // Hook (gancho) - Implementação Mínima. Pode ser sobreescrito pelas subclasses.
  calcularTaxa() {
    return 0;
  }

  calcularDesconto() {
    // Será implementado pelas subclasses.
  }

  realizaCobranca() {
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
