import Pedido from './Pedido';
import State from './State';

export default class EnviadoState implements State {
  private pedido: Pedido;

  constructor(pedido: Pedido) {
    this.pedido = pedido;
  }

  sucessoAoPagar(): void {
    throw new Error('Operação não suportada, o pedido já foi pago e enviado.');
  }

  cancelarPedido(): void {
    throw new Error('Operação não suportada, o pedido já foi enviado.');
  }

  despacharPedido(): void {
    throw new Error('Operação não suportada, o pedido já foi enviado.');
  }
}
