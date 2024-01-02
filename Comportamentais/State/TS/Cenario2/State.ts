export default interface State {
  // Transição Sucesso ao Pagar;
  sucessoAoPagar(): void;
  // Transições Cancelar Pedido;
  cancelarPedido(): void;
  // Transição Despachar Pedido;
  despacharPedido(): void;
}
