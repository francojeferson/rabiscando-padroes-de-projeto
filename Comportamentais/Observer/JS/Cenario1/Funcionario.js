import Email from './Email';

export default class Funcionario {
  constructor(nome, email, subject) {
    this.nome = nome;
    this.email = email;
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update(mensagem) {
    Email.enviarEmail(this, mensagem);
  }

  getNome() {
    return this.nome;
  }

  getEmail() {
    return this.email;
  }
}
