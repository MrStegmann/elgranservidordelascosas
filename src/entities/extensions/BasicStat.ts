import mongoose, { Schema, Document } from "mongoose";

export interface IBasicStat extends Document {
  hp: number;
  damageGetted: number;
  mp: number;
  mpSpented: number;
  spiritPoint: number;
  spiritPointSpented: number;
  ap: number;
  sp: number;
}

const basicStatSchema: Schema<IBasicStat> = new mongoose.Schema({
  hp: { type: Number, default: 15 }, // Puntos de vida totales
  damageGetted: { type: Number, default: 0 }, // Daño recibido (vida restante = hp - damageGetted)
  mp: { type: Number, default: 10 }, // Puntos de maná totales
  mpSpented: { type: Number, default: 0 }, // Maná gastado (restante = mp - mpSpented)
  spiritPoint: { type: Number, default: 10 }, // Puntos de espíritu totales
  spiritPointSpented: { type: Number, default: 0 }, // Espíritu gastado (restante = spiritPoint - spiritPointSpented)
  ap: { type: Number, default: 0 }, // Puntos de atributo
  sp: { type: Number, default: 2 }, // Puntos de hechizo/habilidad
});

export { basicStatSchema };
