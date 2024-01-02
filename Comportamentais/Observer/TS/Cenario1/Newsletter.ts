import Observer from './Observer';
import Subject from './Subject';

export default class Newsletter implements Subject {
  private observers: Observer[] = [];
  private mensagens: string[] = [];

  /*Adiciona um objeto a lista de observers a serem notificados
quando uma nova mensagem for inserida na newsletter. */
  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  /*Remove um objeto a lista de observers a serem notificados
quando uma nova mensagem for inserida na newsletter. */
  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  //Notifica todos os observer sobre a nova mensagem da newsletter.
  public notifyObservers(): void {
    const mensagem = this.mensagens[this.mensagens.length - 1];
    this.observers.forEach((observer) => {
      observer.update(mensagem);
    });
  }

  /*Adiciona uma nova mensagem a newsletter e solicita que todos
os observers sejam notificados */
  public addMensagen(mensagem: string): void {
    this.mensagens.push(mensagem);
    this.notifyObservers();
  }
}
