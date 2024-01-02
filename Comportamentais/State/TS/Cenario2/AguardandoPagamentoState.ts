import Pedido from './Pedido';
import State from './State';

export default class AguardandoPagamentoState implements State {
  // Referência a classe Pedido.
  private pedido: Pedido;

  constructor(pedido: Pedido) {
    // Guarda referência do pedido.
    this.pedido = pedido;
  }

  // Transição Sucesso ao Pagar;
  sucessoAoPagar(): void {
    /* Ao ter sucesso ao pagar um pedido Aguardando Pagamento, muda o estado do pedido para Pago. */
    this.pedido.sucessoAoPagar();
  }

  // Transições Cancelar Pedido;
  cancelarPedido(): void {
    // Ao tentar cancelar um pedido Aguardando Pagamento, mostrar mensagem de erro.
    throw new Error('Operação não suportada, o pedido ainda não foi pago.');
  }

  // Transição Despachar Pedido;
  despacharPedido(): void {
    // Ao tentar despachar um pedido Aguardando Pagamento, mostrar mensagem de erro.
    throw new Error('Operação não suportada, o pedido ainda não foi pago.');
  }
}
