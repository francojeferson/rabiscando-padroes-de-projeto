export default interface Observer {
  update(mensagem: string): void;

  getNome(): string;

  getEmail(): string;
}
