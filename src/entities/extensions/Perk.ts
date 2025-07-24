import { Schema, Document } from "mongoose";

interface IPerkLevel {
  [key: string]: any; // puedes ajustar este tipo según la estructura real
}

interface IPerk extends Document {
  id: number;
  type: string;
  name: string;
  description: string;
  level: number;
  levelOne: IPerkLevel;
  levelTwo: IPerkLevel;
  levelThree: IPerkLevel;
}

const perkSchema = new Schema<IPerk>({
  id: { type: Number, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: Number, required: true },
  levelOne: { type: Object, required: true },
  levelTwo: { type: Object, required: true },
  levelThree: { type: Object, required: true },
});

export { perkSchema, IPerk };
