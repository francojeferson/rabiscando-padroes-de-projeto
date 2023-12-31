import Pedido from './Pedido';

export default class PedidoMoveis extends Pedido {
  constructor() {
    super();
    this.nomeSetor = 'Móveis';
  }

  getNomeSetor() {
    return this.nomeSetor;
  }

  setNomeSetor(nomeSetor) {
    this.nomeSetor = nomeSetor;
  }

  calculaFreteComum() {
    return this.valor * 0.05; //O frete comum custa 5% o valor do pedido.
  }

  calculaFreteExpresso() {
    throw new Error('Indisponível'); //Frete não aceito, uma exceção é lançada.
  }
}
