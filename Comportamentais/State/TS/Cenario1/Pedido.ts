export default class Pedido {
  // Constantes que definem os possíveis estados do pedido
  static AGUARDANDO_PAGAMENTO = 1;
  static PAGO = 2;
  static CANCELADO = 3;
  static ENVIADO = 4;
  private estadoAtual: number; // Estado atual do pedido.

  constructor() {
    // Definição do estado inicial do pedido.
    this.estadoAtual = Pedido.AGUARDANDO_PAGAMENTO;
  }

  // Transição Sucesso ao Pagar;
  sucessoAoPagar() {
    // Se o pedido estiver aguardando pagamento.
    if (this.estadoAtual == Pedido.AGUARDANDO_PAGAMENTO) {
      // Mude o estado do pedido para Pago.
      this.estadoAtual = Pedido.PAGO;
    } else {
      // Senão mostre uma mensagem de erro;
      console.log('O pedido não está aguardando pagamento');
    }
  }

  // Transições Cancelar Pedido;
  cancelarPedido() {
    // Se o pedido estiver aguardando pagamento;
    if (this.estadoAtual == Pedido.AGUARDANDO_PAGAMENTO) {
      // Mude o estado do pedido para Cancelado;
      this.estadoAtual = Pedido.CANCELADO;
    } else if (this.estadoAtual == Pedido.PAGO) {
      // Mude o estado do pedido para Cancelado;
      this.estadoAtual = Pedido.CANCELADO;
    } else {
      console.log('O pedido não pode ser cancelado'); // Senão mostre uma mensagem de erro;
    }
  }

  // Transição Despachar Pedido;
  despacharPedido() {
    // Se o pedido estiver Pago.
    if (this.estadoAtual == Pedido.PAGO) {
      // Mude o estado do pedido para Enviado.
      this.estadoAtual = Pedido.ENVIADO;
    } else {
      console.log('O pedido se encontra cancelado'); // Senão mostre uma mensagem de erro;
    }
  }
}
