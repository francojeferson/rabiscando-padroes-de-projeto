import Frete from './Frete';

export default class FreteExpresso implements Frete {
  calcula(valorPedido: number): number {
    return valorPedido * 0.1; //O frete expresso custa 10% o valor do pedido.
  }
}
