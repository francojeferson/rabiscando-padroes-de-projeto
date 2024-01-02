import AguardandoPagamentoState from './AguardandoPagamentoState';
import CanceladoState from './CanceladoState';
import EnviadoState from './EnviadoState';
import PagoState from './PagoState';
import State from './State';

export default class Pedido {
  //mantém uma referência para cada objeto de estado.
  private aguardandoPagamento: State;
  private pago: State;
  private cancelado: State;
  private enviado: State;

  //Estado atual do pedido.
  private estadoAtual: State;

  constructor() {
    //Criação e atribuição dos possíveis estados de Pedido.
    this.aguardandoPagamento = new AguardandoPagamentoState(this);
    this.pago = new PagoState(this);
    this.cancelado = new CanceladoState(this);
    this.enviado = new EnviadoState(this);
    //Definição do estado atual.
    this.estadoAtual = this.aguardandoPagamento;
  }

  //Transição Sucesso ao Pagar;
  sucessoAoPagar(): void {
    try {
      //Chama o método sucessoAoPagar() do objeto de estado atual.
      this.estadoAtual.sucessoAoPagar();
    } catch (e) {
      console.log(e.message);
    }
  }

  //Transições Cancelar Pedido;
  cancelarPedido(): void {
    try {
      //Chama o método cancelarPedido() do objeto de estado atual.
      this.estadoAtual.cancelarPedido();
    } catch (e) {
      console.log(e.message);
    }
  }

  //Transição Despachar Pedido;
  despacharPedido(): void {
    try {
      //Chama o método despacharPedido() do objeto de estado atual.
      this.estadoAtual.despacharPedido();
    } catch (e) {
      console.log(e.message);
    }
  }

  /*Getters que permitem que as classes de estado recuperarem os possíveis objetos de estado de Pedido*/

  getAguardandoPagamento(): State {
    return this.aguardandoPagamento;
  }

  getPago(): State {
    return this.pago;
  }

  getCancelado(): State {
    return this.cancelado;
  }

  getEnviado(): State {
    return this.enviado;
  }

  //Setter que permite que os objetos de estados troquem o estado atual de Pedido.
  setEstadoAtual(estadoAtual: State): void {
    this.estadoAtual = estadoAtual;
  }
}
