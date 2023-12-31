import Frete from './Frete';

export default class FreteComum implements Frete {
  calcula(valorPedido: number): number {
    return valorPedido * 0.05; //O frete comum custa 5% o valor do pedido.
  }
}
