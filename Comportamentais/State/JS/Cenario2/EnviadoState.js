import Pedido from './Pedido';

export default class EnviadoState {
  pedido = new Pedido();

  constructor(pedido) {
    this.pedido = pedido;
  }

  sucessoAoPagar() {
    throw new Error('Operação não suportada, o pedido já foi pago e enviado.');
  }

  cancelarPedido() {
    throw new Error('Operação não suportada, o pedido já foi enviado.');
  }

  despacharPedido() {
    throw new Error('Operação não suportada, o pedido já foi enviado.');
  }
}
