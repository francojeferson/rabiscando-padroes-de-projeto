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
}
