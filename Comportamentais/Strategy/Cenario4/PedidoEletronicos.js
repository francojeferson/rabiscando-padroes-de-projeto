import Pedido from './Pedido';

export default class PedidoEletronicos extends Pedido {
  constructor() {
    super();
    this.nomeSetor = 'Eletrônicos';
  }

  getNomeSetor() {
    return this.nomeSetor;
  }

  setNomeSetor(nomeSetor) {
    this.nomeSetor = nomeSetor;
  }
}
