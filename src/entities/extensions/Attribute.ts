import mongoose, { Schema, Document } from "mongoose";
import { talentSchema, ITalent } from "./Talent";

export interface IAttribute extends Document {
  code: string;
  label: string;
  value: number;
  tp: number;
  talents: ITalent[];
}

const attributeSchema: Schema<IAttribute> = new mongoose.Schema({
  code: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: Number, required: true },
  tp: { type: Number, required: true },
  talents: { type: [talentSchema], default: [] },
});

export { attributeSchema };
