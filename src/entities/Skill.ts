import mongoose, { Schema, Document } from "mongoose";

interface ISkill extends Document {
  name: string;
  description: string;
  type: string;
  actions: number;
  turns: number;
}

const skillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  actions: { type: Number, required: true },
  turns: { type: Number, required: true },
});

const Skill = mongoose.model<ISkill>("Skill", skillSchema);

export { Skill, skillSchema, ISkill };
