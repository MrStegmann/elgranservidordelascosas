import { Schema, Document } from "mongoose";
import { IItem, itemSchema } from "../Item";

export interface IGear extends Document {
  head?: IItem;
  shoulder?: IItem;
  chest?: IItem;
  hands?: IItem;
  legs?: IItem;
  feet?: IItem;
  necks?: IItem[];
  rings?: IItem[];
  trinkets?: IItem[];
  firstHand?: IItem;
  secondHand?: IItem;
}

const gearSchema = new Schema<IGear>({
  head: itemSchema,
  shoulder: itemSchema,
  chest: itemSchema,
  hands: itemSchema,
  legs: itemSchema,
  feet: itemSchema,
  necks: [itemSchema],
  rings: [itemSchema],
  trinkets: [itemSchema],
  firstHand: itemSchema,
  secondHand: itemSchema,
});

export { gearSchema };
