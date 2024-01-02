import Gateway from './Gateway.js';

export default class PagamentoCredito {
  valor = 0;
  gateway = new Gateway();

  constructor(valor, gateway) {
    this.valor = valor;
    this.gateway = gateway;
  }

  // Calcula a taxa do Gateway.
  calcularTaxa() {
    return this.valor * 0.05; //Retorna uma taxa de 5% o valor do pagamento.
  }

  // Calcula o desconto.
  calcularDesconto() {
    // Se o valor pago for maior que 300 reais.
    if (this.valor > 300) {
      return this.valor * 0.02; //Retorna um desconto de 2% sob o valor do pagamento.
    }
    return 0; //Pagamentos de valores menores que 300 reais não possuem desconto.
  }

  // Realiza a cobrança.
  realizaCobranca() {
    // Calcula o valor total (Valor do pagamento + taxa - desconto).
    const valorFinal =
      this.valor + this.calcularTaxa() - this.calcularDesconto();
    return this.gateway.cobrar(valorFinal); //Delega a cobrança para o Gateway.
  }
}
