export class CorrigeData {
  static corrigeData(valor) {
    let data = valor.split('-');
    return new Date(data[0], data[1] - 1, data[2]);
  }
}
