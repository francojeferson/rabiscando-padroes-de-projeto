import PedidoMoveis from './PedidoMoveis';

//Criação de um pedido do setor de Móveis. (O teste seria semelhante para Eletrônicos).
let pedido = new PedidoMoveis();
// Atribuição do valor;
pedido.setValor(100);
//Cálculos dos dois tipos de frete
console.log('Frete Comum: R$' + pedido.calculaFreteComum());
console.log('Frete Expresso: R$' + pedido.calculaFreteExpresso());

// Saída:
// Frete Comum: R$5.00
// Indisponível
