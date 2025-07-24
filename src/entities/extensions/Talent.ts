import mongoose, { Schema, Document } from "mongoose";

export interface ITalent extends Document {
  code: string;
  label: string;
  value: number;
}

const talentSchema: Schema<ITalent> = new mongoose.Schema({
  code: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: Number, required: true },
});

export { talentSchema };
