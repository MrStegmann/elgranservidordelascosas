import mongoose, { Schema, Document } from "mongoose";

export interface IItem extends Document {
  name?: string;
  description?: string;
  code?: string;
  quality?: string;
  wearable?: boolean;
  usable?: boolean;
  price?: string;
  max?: number;
  quantity?: number;
  inventoryId?: string;
  type?: string;
  talent?: string;
  damage?: number;
  slot?: string;
  pDefense?: number;
  sDefense?: number;
  durability?: number;
  reinforcement?: string;
  requirements?: Record<string, any>;
  cons?: Record<string, any>;
  material?: string;
}

const itemSchema = new Schema<IItem>({
  name: { type: String },
  description: { type: String },
  code: { type: String },
  quality: { type: String },
  wearable: { type: Boolean },
  usable: { type: Boolean },
  price: { type: String },
  max: { type: Number },
  quantity: { type: Number },
  inventoryId: { type: String },
  type: { type: String },
  talent: { type: String },
  damage: { type: Number },
  slot: { type: String },
  pDefense: { type: Number },
  sDefense: { type: Number },
  durability: { type: Number },
  reinforcement: { type: String },
  requirements: { type: Object },
  cons: { type: Object },
  material: { type: String },
});

const Item = mongoose.model<IItem>("Item", itemSchema);

export { Item, itemSchema };
