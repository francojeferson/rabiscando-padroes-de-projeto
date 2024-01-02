import Pagamento from './Pagamento';

export default class PagamentoDebito extends Pagamento {
  // Calcula a taxa do Gateway.
  calcularTaxa(): number {
    // Retorna uma taxa de 4 reais.
    return 4;
  }

  // Calcula o desconto.
  calcularDesconto(): number {
    // Retorna o valor do pagamento com desconto de 5%.
    return this.valor * 0.05;
  }
}
