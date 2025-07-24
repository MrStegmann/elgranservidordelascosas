import { Schema, Document } from "mongoose";

// Define tipos aceptados para herida
export type WoundLevel = "none" | "light" | "moderate" | "heavy";

// Interface para el documento de Mongoose
export interface ILogistic extends Document {
  perceptionScope: number;
  critics: number;
  pifias: number;
  movement: number;
  initiative: number;
  hasBeenSpoted: boolean;
  actions: number;
  spellScope: number;
  extraPPerception: number;
  extraSPerception: number;
  extraChange: number;
  extraAskAction: number;
  wounded: WoundLevel;
  lastTarget: any;
  hasAttacked: boolean;
}

const logisticSchema = new Schema<ILogistic>({
  perceptionScope: { type: Number, default: 100 },
  critics: { type: Number, default: 20 },
  pifias: { type: Number, default: 1 },
  movement: { type: Number, default: 20 },
  initiative: { type: Number, default: 0 },
  hasBeenSpoted: { type: Boolean, default: false },
  actions: { type: Number, default: 2 },
  spellScope: { type: Number, default: 80 },
  extraPPerception: { type: Number, default: 1 },
  extraSPerception: { type: Number, default: 1 },
  extraChange: { type: Number, default: 1 },
  extraAskAction: { type: Number, default: 1 },
  wounded: {
    type: String,
    default: "none",
    enum: ["none", "light", "moderate", "heavy"],
  },
  lastTarget: { type: Schema.Types.Mixed, default: {} },
});

export { logisticSchema };
