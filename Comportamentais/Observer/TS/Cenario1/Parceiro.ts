import Observer from './Observer';
import Subject from './Subject';
import Email from './Email';

export default class Parceiro implements Observer {
  private nome: string;
  private email: string;
  private subject: Subject;

  constructor(nome: string, email: string, subject: Subject) {
    this.nome = nome;
    this.email = email;
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update(mensagem: string): void {
    Email.enviarEmail(this, mensagem);
  }

  getNome(): string {
    return this.nome;
  }

  getEmail(): string {
    return this.email;
  }
}
