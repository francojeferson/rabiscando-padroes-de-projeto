import Gateway from './Gateway';

export default class PagamentoDebito {
  private valor: number;
  private gateway: Gateway;

  constructor(valor: number, gateway: Gateway) {
    this.valor = valor;
    this.gateway = gateway;
  }

  // Calcula a taxa do Gateway.
  calcularTaxa(): number {
    return 4; //Retorna uma taxa de 4 reais.
  }

  // Calcula o desconto.
  calcularDesconto(): number {
    return this.valor * 0.05; //Retorna o valor do pagamento com desconto de 5%.
  }

  realizaCobranca(): boolean {
    const valorFinal =
      this.valor + this.calcularTaxa() - this.calcularDesconto();
    return this.gateway.cobrar(valorFinal);
  }
}
