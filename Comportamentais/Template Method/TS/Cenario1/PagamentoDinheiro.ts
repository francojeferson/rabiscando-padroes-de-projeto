import Gateway from './Gateway';

export default class PagamentoDinheiro {
  private valor: number;
  private gateway: Gateway;

  constructor(valor: number, gateway: Gateway) {
    this.valor = valor;
    this.gateway = gateway;
  }

  // Calcula a taxa do Gateway.
  calcularTaxa(): number {
    return 0; //Pagamento em dinheiro não possui taxa.
  }

  // Calcula o desconto.
  calcularDesconto(): number {
    return this.valor * 0.1; //Retorna o valor do pagamento com desconto de 10%.
  }

  realizaCobranca(): boolean {
    const valorFinal =
      this.valor + this.calcularTaxa() - this.calcularDesconto();
    return this.gateway.cobrar(valorFinal);
  }
}
