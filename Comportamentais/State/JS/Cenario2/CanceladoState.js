import Pedido from './Pedido';

export default class CanceladoState {
  pedido = new Pedido();

  constructor(pedido) {
    this.pedido = pedido;
  }

  sucessoAoPagar() {
    throw new Error('Operação não suportada, o pedido se encontra cancelado.');
  }

  cancelarPedido() {
    throw new Error('Operação não suportada, pedido já cancelado.');
  }

  despacharPedido() {
    throw new Error('Operação não suportada, o pedido se encontra cancelado.');
  }
}
