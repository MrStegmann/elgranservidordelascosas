export class IdGenerator {
  static generate(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 10);
    return `${timestamp}-${random}`; // Ejemplo: 'ltnu1wr5r-9jx1zslv'
  }
}
