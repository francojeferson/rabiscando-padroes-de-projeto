import Pedido from './Pedido';

export default class PedidoMoveis extends Pedido {
  private nomeSetor: string;

  constructor() {
    super();
    this.nomeSetor = 'Móveis';
  }

  getNomeSetor(): string {
    return this.nomeSetor;
  }

  setNomeSetor(nomeSetor: string): void {
    this.nomeSetor = nomeSetor;
  }
}
