export default class Newsletter {
  constructor() {
    this.observers = [];
    this.mensagens = [];
  }

  /*Adiciona um objeto a lista de observers a serem notificados
quando uma nova mensagem for inserida na newsletter. */
  registerObserver(observer) {
    this.observers.push(observer);
  }

  /*Remove um objeto a lista de observers a serem notificados
quando uma nova mensagem for inserida na newsletter. */
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  //Notifica todos os observer sobre a nova mensagem da newsletter.
  notifyObservers() {
    const mensagem = this.mensagens[this.mensagens.length - 1];
    this.observers.forEach((observer) => {
      observer.update(mensagem);
    });
  }

  /*Adiciona uma nova mensagem a newsletter e solicita que todos
os observers sejam notificados */
  addMensagen(mensagem) {
    this.mensagens.push(mensagem);
    this.notifyObservers();
  }
}
