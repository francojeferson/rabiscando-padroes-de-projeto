import Newsletter from './Newsletter';
import Funcionario from './Funcionario';
import Cliente from './Cliente';
import Parceiro from './Parceiro';
import Fornecedor from './Fornecedor';

//Criação da Newsletter (Subject);
let newsletter = new Newsletter();

//Criação de funcionários
let funcionario1 = new Funcionario(
  'Funcionario 1',
  'funcionario1@email.com',
  newsletter,
);
let funcionario2 = new Funcionario(
  'Funcionario 2',
  'funcionario2@email.com',
  newsletter,
);

//Criação de clientes
let cliente = new Cliente('Cliente 1', 'cliente1@email.com', newsletter);

//Criação de parceiros
let parceiro = new Parceiro('Parceiro 1', 'parceiro1@email.com', newsletter);

//Criação de fornecedor
let fornecedor = new Fornecedor(
  'Fornecedor 1',
  'fornecedor1@email.com',
  newsletter,
);

//Envio da primeira mensagem
newsletter.addMensagen('Primeira Mensagem');
console.log('######\n\n'); //Separador para facilitar a leitura da saída.

//Remoção do Funcionário 2 da lista de objetos (observers) a serem notificados.
newsletter.removeObserver(funcionario2);

//Envio da segunda mensagem (Não irá para o Funcionário 2)
newsletter.addMensagen('Segunda Mensagem');
console.log('######\n\n'); //Separador para facilitar a leitura da saída.

//O Funcionário 2 é reinserido na lista de observers.
newsletter.registerObserver(funcionario2);

//Envio da terceira Mensagem
newsletter.addMensagen('Terceira Mensagem');

//Saída:
// -----------------------------------------------------------------------------------
// Email enviado para Funcionário 1 - funcionario1@email.com
// Mensagem: Primeira Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Funcionário 2 - funcionario2@email.com
// Mensagem: Primeira Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Cliente 1 - cliente1@email.com
// Mensagem: Primeira Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Parceiro 1 - parceiro1@email.com
// Mensagem: Primeira Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Fornecedor 1 - fornecedor1@email.com
// Mensagem: Primeira Mensagem

// ######

// -----------------------------------------------------------------------------------
// Email enviado para Funcionário 1 - funcionario1@email.com
// Mensagem: Segunda Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Cliente 1 - cliente1@email.com
// Mensagem: Segunda Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Parceiro 1 - parceiro1@email.com
// Mensagem: Segunda Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Fornecedor 1 - fornecedor1@email.com
// Mensagem: Segunda Mensagem

// ######

// -----------------------------------------------------------------------------------
// Email enviado para Funcionário 1 - funcionario1@email.com
// Mensagem: Terceira Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Cliente 1 - cliente1@email.com
// Mensagem: Terceira Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Parceiro 1 - parceiro1@email.com
// Mensagem: Terceira Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Fornecedor 1 - fornecedor1@email.com
// Mensagem: Terceira Mensagem

// -----------------------------------------------------------------------------------
// Email enviado para Funcionário 2 - funcionario2@email.com
// Mensagem: Terceira Mensagem
