import Pedido from './Pedido';

export default class PedidoEletronicos extends Pedido {
  private nomeSetor: string;

  constructor() {
    super();
    this.nomeSetor = 'Eletrônicos';
  }

  getNomeSetor(): string {
    return this.nomeSetor;
  }

  setNomeSetor(nomeSetor: string): void {
    this.nomeSetor = nomeSetor;
  }

  calculaFreteComum(): number {
    return this.valor * 0.05; //O frete comum custa 5% o valor do pedido.
  }

  calculaFreteExpresso(): number {
    return this.valor * 0.1; //O frete expresso custa 10% o valor do pedido.
  }
}
