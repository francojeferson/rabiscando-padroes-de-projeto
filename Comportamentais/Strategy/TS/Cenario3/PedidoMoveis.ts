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

  calculaFreteComum(): number {
    return this.valor * 0.05; //O frete comum custa 5% o valor do pedido.
  }

  calculaFreteExpresso(): number {
    throw new Error('Indisponível'); //Frete não aceito, uma exceção é lançada.
  }
}
