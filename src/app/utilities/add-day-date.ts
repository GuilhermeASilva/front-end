export class AdicionaUmDiaData {
  static adicionaUmDiaData(dataNascimento) {
    let data: Date = new Date(dataNascimento);
    data.setDate(data.getDate() + 1);
    return data;
  }
}
