export class Race {
  private _id: string;
  private code: string;
  private label: string;
  private pros: Map<string, number>;
  private cons: Map<string, number>;
  private special: string[];

  constructor(
    id: string,
    code: string,
    label: string,
    pros: Map<string, number>,
    cons: Map<string, number>,
    special: string[]
  ) {
    this._id = id;
    this.code = code;
    this.label = label;
    this.pros = pros;
    this.cons = cons;
    this.special = special;
  }

  getId(): string {
    return this._id;
  }
  setId(id: string): void {
    this._id = id;
  }

  getCode(): string {
    return this.code;
  }
  setCode(code: string): void {
    this.code = code;
  }

  getLabel(): string {
    return this.label;
  }
  setLabel(label: string): void {
    this.label = label;
  }

  getPros(): Map<string, number> {
    return this.pros;
  }
  setPros(pros: Map<string, number>): void {
    this.pros = pros;
  }

  getCons(): Map<string, number> {
    return this.cons;
  }
  setCons(cons: Map<string, number>): void {
    this.cons = cons;
  }

  getSpecial(): string[] {
    return this.special;
  }
  setSpecial(special: string[]): void {
    this.special = special;
  }
}
