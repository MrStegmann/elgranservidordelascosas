import mongoose, { Schema, Document, Types } from "mongoose";
import { ISpell } from "./Spell";
import { ISkill } from "./Skill";
import { attributeSchema, IAttribute } from "./extensions/Attribute";
import { IPerk, perkSchema } from "./extensions/Perk";
import { IItem, itemSchema } from "./Item";
import { IGear, gearSchema } from "./extensions/Gear";
import { alteredStateSchema, IAlteredState } from "./extensions/AlteredState";
import { ISpecials, specialsSchema } from "./extensions/Special";
import { advantageSchema, IAdvantage } from "./extensions/Advantage";
import { IDisadvantage, disadvantageSchema } from "./extensions/Disadvantage";
import { ILogistic, logisticSchema } from "./extensions/Logistic";
import { basicStatSchema, IBasicStat } from "./extensions/BasicStat";

type Category = "noob" | "normal" | "elite" | "boss";

export interface ICharacter extends Document {
  name: string;
  lore: string;
  level: number;
  category: Category;
  race: string;
  isHuargen: boolean;
  isInHumanForm: boolean;

  attributes: IAttribute[];
  perks: IPerk[];
  inventory: IItem[];
  gear: IGear;
  spells: Types.ObjectId[] | ISpell[];
  skills: Types.ObjectId[] | ISkill[];

  basicStat: IBasicStat;
  logistic: ILogistic;
  advantage: IAdvantage;
  disadvantage: IDisadvantage;
  alteredState: IAlteredState;
  specials: ISpecials;

  experience: number;
  maxExperience: number;
}

const characterSchema = new Schema<ICharacter>({
  name: { type: String, required: true },
  lore: { type: String, default: "" },
  level: { type: Number, default: 1 },
  category: {
    type: String,
    enum: ["noob", "normal", "elite", "boss"],
    default: "noob",
  },
  race: { type: String, required: true },
  isHuargen: { type: Boolean, default: false },
  isInHumanForm: { type: Boolean, default: true },

  attributes: { type: [attributeSchema], default: [] },
  perks: { type: [perkSchema], default: [] },
  inventory: { type: [itemSchema], default: [] },
  gear: { type: gearSchema, default: () => ({}) },

  spells: [{ type: Schema.Types.ObjectId, ref: "Spell" }],
  skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],

  basicStat: { type: basicStatSchema, default: () => ({}) },
  logistic: { type: logisticSchema, default: () => ({}) },
  advantage: { type: advantageSchema, default: () => ({}) },
  disadvantage: { type: disadvantageSchema, default: () => ({}) },
  alteredState: { type: alteredStateSchema, default: () => ({}) },
  specials: { type: specialsSchema, default: () => ({}) },

  experience: { type: Number, default: 0 },
  maxExperience: { type: Number, default: 100 },
});

const Character = mongoose.model<ICharacter>("Character", characterSchema);

export { Character, characterSchema };
