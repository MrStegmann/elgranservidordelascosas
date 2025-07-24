import { Document, Schema, Model, model } from "mongoose";

// Interface para definir la forma de Advantage en TS
export interface IAdvantage extends Document {
  flanking: boolean;
  behind: boolean;
  overfallen: boolean;
  theHeight: boolean;
  inDarkness: boolean;
  isAmbushing: boolean;
  opportunityAttack: boolean;
  tactical: boolean;
  novice: boolean;
  lucky: boolean;
}

// Esquema Mongoose con nombres corregidos
const advantageSchema: Schema<IAdvantage> = new Schema({
  flanking: { type: Boolean, default: false },
  behind: { type: Boolean, default: false },
  overfallen: { type: Boolean, default: false },
  theHeight: { type: Boolean, default: false },
  inDarkness: { type: Boolean, default: false },
  isAmbushing: { type: Boolean, default: false },
  opportunityAttack: { type: Boolean, default: false },
  tactical: { type: Boolean, default: false },
  novice: { type: Boolean, default: false },
  lucky: { type: Boolean, default: false },
});

// Modelo exportable para usar en otros lados si quieres
const AdvantageModel: Model<IAdvantage> = model<IAdvantage>(
  "Advantage",
  advantageSchema
);

export { advantageSchema, AdvantageModel };
