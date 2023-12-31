import valorPedido from './FreteComum';
import valorPedido from './FreteExpresso';

export default class Frete {
  valorPedido = valorPedido;

  // Recebe o valor do pedido que é utilizado no cálculo do frete.
  calcula(valorPedido) {
    return valorPedido;
  }
}
