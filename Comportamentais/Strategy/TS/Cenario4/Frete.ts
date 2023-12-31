export default interface Frete {
  // Recebe o valor do pedido que é utilizado no cálculo do frete.
  calcula(valorPedido: number): number;
}
