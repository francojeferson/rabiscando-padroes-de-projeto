export default class Gateway {
  //Simulação de uma cobrança - retorna 'true' ou 'false' de forma randômica.
  cobrar(valor) {
    console.log('R$' + valor); //Apenas para visualizar o valor final.
    const respostas = [true, false];
    return respostas[Math.floor(Math.random() * 2)];
  }
}
