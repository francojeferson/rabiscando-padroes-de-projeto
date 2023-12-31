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

  calculaFreteComum() {
    return this.valor * 0.05; //O frete comum custa 5% o valor do pedido.
  }

  calculaFreteExpresso() {
    return this.valor * 0.1; //O frete expresso custa 10% o valor do pedido.
  }
}
