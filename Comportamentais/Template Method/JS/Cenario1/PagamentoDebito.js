import Gateway from './Gateway.js';

export default class PagamentoDebito {
  valor = 0;
  gateway = new Gateway();

  constructor(valor, gateway) {
    this.valor = valor;
    this.gateway = gateway;
  }

  // Calcula a taxa do Gateway.
  calcularTaxa() {
    return 4; //Retorna uma taxa de 4 reais.
  }

  // Calcula o desconto.
  calcularDesconto() {
    return this.valor * 0.05; //Retorna o valor do pagamento com desconto de 5%.
  }

  realizaCobranca() {
    const valorFinal =
      this.valor + this.calcularTaxa() - this.calcularDesconto();
    return this.gateway.cobrar(valorFinal);
  }
}
