import Observer from './Observer';

export default class Email {
  static enviarEmail(observer: Observer, mensagem: string) {
    console.log(`---------------------------------------------------------------------------
    Email enviado para: ${observer.getNome()} - ${observer.getEmail()}
    Mensagem: ${mensagem}

    `);
  }
}
