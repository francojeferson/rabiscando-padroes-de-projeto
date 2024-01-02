import Observer from './Observer';

export default class Email {
  observer = Observer;

  static enviarEmail(observer, mensagem) {
    console.log(
      `---------------------------------------------------------------------------
      Email enviado para: ${observer.getNome()} - ${observer.getEmail()}
      Mensagem: ${mensagem}

      `,
    );
  }
}
