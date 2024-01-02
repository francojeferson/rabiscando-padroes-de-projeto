import Observer from './Observer';
import Subject from './Subject';
import Email from './Email';

export default class Cliente implements Observer {
  private nome: string;
  private email: string;
  private subject: Subject;

  // O subject é recebido por parâmetro para que o cliente tenha acesso a ele.
  public constructor(nome: string, email: string, subject: Subject) {
    this.nome = nome;
    this.email = email;
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  public update(mensagem: string): void {
    Email.enviarEmail(this, mensagem); //Faz o envio da mensagem para o email.
  }

  public getNome(): string {
    return this.nome;
  }

  public getEmail(): string {
    return this.email;
  }
}
