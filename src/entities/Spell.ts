import mongoose, { Schema, Document } from "mongoose";

interface ISpell extends Document {
  category: string;
  attribute: string;
  talent: string;
  name: string;
  description: string;
  cost: number;
  power: number;
  actions: number;
  turns: number;
  level: number;
}

const spellSchema = new Schema<ISpell>({
  category: { type: String, required: true },
  attribute: { type: String, required: true },
  talent: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  power: { type: Number, required: true },
  actions: { type: Number, required: true },
  turns: { type: Number, required: true },
  level: { type: Number, required: true },
});

const Spell = mongoose.model<ISpell>("Spell", spellSchema);

export { Spell, spellSchema, ISpell };
