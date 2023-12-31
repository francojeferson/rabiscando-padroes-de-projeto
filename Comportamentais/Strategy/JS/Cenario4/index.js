import FreteComum from './FreteComum';
import FreteExpresso from './FreteExpresso';
import PedidoEletronicos from './PedidoEletronicos';
import PedidoMoveis from './PedidoMoveis';

// Criação do tipos de frete.
const freteComum = new FreteComum();
const freteExpresso = new FreteExpresso();

// Criação de um pedido do setor de eletrônicos.
const pedido1 = new PedidoEletronicos();

// Atribuição do valor.
pedido1.setValor(100);

// Definição do frete comum como sendo o frete escolhido.
pedido1.setTipoFrete(freteComum);

// Cálculo do frete comum.
console.log('Eletrônicos Frete Comum: R$' + pedido1.calculaFrete());
// No mesmo pedido podemos trocar o tipo de frete
pedido1.setTipoFrete(freteExpresso);

// Agora o cálculo do frete expresso.
console.log('Eletrônicos Frete Expresso: R$' + pedido1.calculaFrete());

// Criação de um pedido do setor de móveis.
const pedido2 = new PedidoMoveis();

// Atribuição do valor.
pedido2.setValor(100);

// Definição do frete comum como sendo o frete escolhido. Expresso não está disponível.
pedido2.setTipoFrete(freteComum);

// Cálculo do frete comum.
console.log('Móveis Frete Comum: R$' + pedido2.calculaFrete());

// Saída:
// Eletrônicos Frete Comum: R$5.00
// Eletrônicos Frete Expresso: R$10.00
// Móveis Frete Comum: R$5.00
