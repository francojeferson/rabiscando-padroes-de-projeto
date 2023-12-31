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
}
