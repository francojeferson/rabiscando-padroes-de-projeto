import Pedido from './Pedido';

export default class AguardandoPagamentoState {
  pedido = new Pedido();

  constructor(pedido) {
    this.pedido = pedido;
  }

  // Transição Sucesso ao Pagar;
  sucessoAoPagar() {
    /* Ao ter sucesso ao pagar um pedido Aguardando Pagamento, muda o estado do pedido para Pago. */
    this.pedido.sucessoAoPagar();
  }

  // Transições Cancelar Pedido;
  cancelarPedido() {
    // Ao tentar cancelar um pedido Aguardando Pagamento, mostrar mensagem de erro.
    throw new Error('Operação não suportada, o pedido ainda não foi pago.');
  }

  // Transição Despachar Pedido;
  despacharPedido() {
    // Ao tentar despachar um pedido Aguardando Pagamento, mostrar mensagem de erro.
    throw new Error('Operação não suportada, o pedido ainda não foi pago.');
  }
}
