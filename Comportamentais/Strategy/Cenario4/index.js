import FreteComum from './FreteComum';
import FreteExpresso from './FreteExpresso';
import PedidoEletronicos from './PedidoEletronicos';
import PedidoMoveis from './PedidoMoveis';

// Criação do tipos de frete.
let freteComum = new FreteComum();
let freteExpresso = new FreteExpresso();

// Criação de um pedido do setor de eletrônicos.
let pedido = new PedidoEletronicos();

// Atribuição do valor.
pedido.setValor(100);

// Definição do frete comum como sendo o frete escolhido.
pedido.setTipoFrete(freteComum);

// Cálculo do frete comum.
console.log('Eletrônicos Frete Comum: R$' + pedido.calculaFrete());
// No mesmo pedido podemos trocar o tipo de frete
pedido.setTipoFrete(freteExpresso);

// Agora o cálculo do frete expresso.
console.log('Eletrônicos Frete Expresso: R$' + pedido.calculaFrete());

// Criação de um pedido do setor de móveis.
let pedido2 = new PedidoMoveis();

// Atribuição do valor.
pedido2.setValor(100);

// Definição do frete comum como sendo o frete escolhido. Expresso não está disponível.
pedido2.setTipoFrete(freteComum);

// Cálculo do frete comum.
console.log('Moveis Frete Comum: R$' + pedido2.calculaFrete());

// Saída:
// Eletrônicos Frete Comum: R$5.00
// Eletrônicos Frete Expresso: R$10.00
// Moveis Frete Comum: R$5.00
