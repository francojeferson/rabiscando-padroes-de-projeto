import Gateway from './Gateway.js';

export default class PagamentoDinheiro {
  valor = 0;
  gateway = new Gateway();

  constructor(valor, gateway) {
    this.valor = valor;
    this.gateway = gateway;
  }

  // Calcula a taxa do Gateway.
  calcularTaxa() {
    return 0; //Pagamento em dinheiro não possui taxa.
  }

  // Calcula o desconto.
  calcularDesconto() {
    return this.valor * 0.1; //Retorna o valor do pagamento com desconto de 10%.
  }

  realizaCobranca() {
    const valorFinal =
      this.valor + this.calcularTaxa() - this.calcularDesconto();
    return this.gateway.cobrar(valorFinal);
  }
}
