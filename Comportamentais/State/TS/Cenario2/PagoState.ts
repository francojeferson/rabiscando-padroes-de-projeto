import Pedido from './Pedido';
import State from './State';

export default class PagoState implements State {
  private pedido: Pedido;

  constructor(pedido: Pedido) {
    this.pedido = pedido;
  }

  sucessoAoPagar(): void {
    throw new Error('Operação não suportada, o pedido já foi pago.');
  }

  cancelarPedido(): void {
    this.pedido.cancelarPedido();
  }

  despacharPedido(): void {
    this.pedido.despacharPedido();
  }
}
