import Pedido from './Pedido';

export default class PagoState {
  pedido = new Pedido();

  constructor(pedido) {
    this.pedido = pedido;
  }

  sucessoAoPagar() {
    throw new Error('Operação não suportada, o pedido já foi pago.');
  }

  cancelarPedido() {
    this.pedido.cancelarPedido();
  }

  despacharPedido() {
    this.pedido.despacharPedido();
  }
}
