import mongoose, { Schema, Document } from "mongoose";
import { IAttribute, attributeSchema } from "./Attribute";

export interface IPet extends Document {
  name: string;
  age: number;
  specie: string;
  attributes: IAttribute[];
  owner: string;
}

const petSchema: Schema<IPet> = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  specie: { type: String, required: true },
  attributes: { type: [attributeSchema], default: [] },
  owner: { type: String, required: true },
});
