import mongoose, { Schema, Document, Types } from "mongoose";

export interface INpc extends Document {
  name?: string;
  race?:number;
  special?: String[];
  level?: number;
  category?: string;
  strength?: number;
  dexterity?: number;
  intelligence?: number;
  willpower?: number;
  constitution?: number;
  wisdom?: number;
  charisma?: number;
  weapon?: string;
  spells?: Types.ObjectId[];
  skills?: Types.ObjectId[];
}

const npcSchema = new Schema<INpc>({
  name: { type: String },
  race: {type: String },
  special: { type: Array},
  level: { type: Number },
  category: { type: String },
  strength: { type: Number },
  dexterity: { type: Number },
  intelligence: { type: Number },
  willpower: { type: Number },
  constitution: { type: Number },
  wisdom: { type: Number },
  charisma: { type: Number },
  weapon: { type: String },
  spells: [{ type: Schema.Types.ObjectId, ref: "Spell" }],
  skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
});

const Npc = mongoose.model<INpc>("Npc", npcSchema);

export { Npc, npcSchema };
