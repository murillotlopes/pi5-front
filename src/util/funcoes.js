
class Funcoes {

  converteTimeStamp(data) {

    let partesData = data.split('/');
    let dia = partesData[0];
    let mes = partesData[1] - 1;
    let ano = partesData[2];
    let newData = new Date(ano, mes, dia);

    return newData.getTime()
  }
}

export default new Funcoes()