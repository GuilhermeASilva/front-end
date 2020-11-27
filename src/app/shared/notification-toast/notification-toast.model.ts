export class NotificationToastModel {
  texto: string
  tipo?: number
  exibir?: boolean
  delay?: number

  constructor(texto: string, tipo?: number, exibir?: boolean, delay?: number) {
    this.texto = texto
    this.tipo = tipo
    this.exibir = exibir
    this.delay = delay
  }
}
