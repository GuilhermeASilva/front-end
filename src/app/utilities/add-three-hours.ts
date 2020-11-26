export class AdicionaTresHoras {
  static adicionaTresHoras(dataNascimento) {
    let data: Date = new Date(dataNascimento);
    data.setDate(data.getHours() + 3);
    return data;
  }
}
