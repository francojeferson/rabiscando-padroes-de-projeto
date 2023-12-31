import PedidoEletronicos from './PedidoEletronicos';

//Criação de um pedido do setor de Eletrônicos. (O teste seria semelhante para Móveis).
let pedido = new PedidoEletronicos();
// Atribuição do valor;
pedido.setValor(100);
//Cálculos dos dois tipos de frete
console.log('Frete Comum: R$' + pedido.calculaFreteComum());
console.log('Frete Expresso: R$' + pedido.calculaFreteExpresso());

// Saída:
// Frete Comum: R$5.00
// Frete Expresso: R$10.00
