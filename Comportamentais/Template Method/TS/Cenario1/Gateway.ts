export default class Gateway {
  //Simulação de uma cobrança - retorna 'true' ou 'false' de forma randômica.
  public cobrar(valor: number): boolean {
    console.log('R$' + valor); //Apenas para visualizar o valor final.
    const respostas: boolean[] = [true, false];
    return respostas[Math.floor(Math.random() * respostas.length)];
  }
}
