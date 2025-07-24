import { Schema } from "mongoose";

export interface ISpecials {
  superStrength: boolean;
  superAudition: boolean;
  nightVision: boolean;
  conjurer: boolean;
  memberReplacement: boolean;
  hugeMovement: boolean;
}

const specialsSchema = new Schema<ISpecials>({
  superStrength: { type: Boolean, default: false },
  superAudition: { type: Boolean, default: false },
  nightVision: { type: Boolean, default: false },
  conjurer: { type: Boolean, default: false },
  memberReplacement: { type: Boolean, default: false },
  hugeMovement: { type: Boolean, default: false },
});

export { specialsSchema };
