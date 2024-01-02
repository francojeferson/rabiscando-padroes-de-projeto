import Pagamento from './Pagamento';

export default class PagamentoDinheiro extends Pagamento {
  // Calcula o desconto.
  calcularDesconto() {
    //Retorna o valor do pagamento com desconto de 10%.
    return this.valor * 0.1;
  }
}
