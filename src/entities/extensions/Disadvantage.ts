import { Schema, Document } from "mongoose";

export interface IDisadvantage extends Document {
  phobia: string;
  oneArmed: boolean;
  vengeful: boolean;
  indecisive: boolean;
}

const disadvantageSchema = new Schema<IDisadvantage>({
  phobia: { type: String, default: "" }, // fobia específica (vacío si no tiene)
  oneArmed: { type: Boolean, default: false }, // tiene solo un brazo
  vengeful: { type: Boolean, default: false }, // ataca solo al primero que le atacó
  indecisive: { type: Boolean, default: false }, // no puede repetir objetivo dos turnos seguidos
});

export { disadvantageSchema };
