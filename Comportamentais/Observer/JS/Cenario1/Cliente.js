import Email from './Email';

export default class Cliente {
  nome = '';
  email = '';
  subject = null;

  // O subject é recebido por parâmetro para que o cliente tenha acesso a ele.
  constructor(nome, email, subject) {
    this.nome = nome;
    this.email = email;
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update(mensagem) {
    Email.enviarEmail(this, mensagem); //Faz o envio da mensagem para o email.
  }

  getNome() {
    return this.nome;
  }

  getEmail() {
    return this.email;
  }
}
