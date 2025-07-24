import mongoose, { Schema, Document } from "mongoose";

interface IStage {
  name: string;
  description: string;
  target: string;
  cluesHooks?: string[];
}

interface IOneShot extends Document {
  title: string;
  flags?: string[];
  intro: IStage;
  knot: IStage;
  conclusion: IStage;
  createdAt?: Date;
}

const stageSchema = new Schema<IStage>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  target: { type: String, required: true },
  cluesHooks: [{ type: String }],
});

const oneShotSchema = new Schema<IOneShot>({
  title: { type: String, required: true },
  flags: [{ type: String }],
  intro: { type: stageSchema, required: true },
  knot: { type: stageSchema, required: true },
  conclusion: { type: stageSchema, required: true },
  createdAt: { type: Date, default: Date.now },
});

const OneShot = mongoose.model<IOneShot>("OneShot", oneShotSchema);

export { OneShot, IOneShot, IStage };
