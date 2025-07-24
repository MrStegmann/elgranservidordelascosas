import mongoose, { Document, Schema } from "mongoose";

export interface IAlteredState extends Document {
  canBeBleeding: boolean;
  canBeStunned: boolean;
  canBeFelled: boolean;
  canBeSick: boolean;
  canBeScared: boolean;
  canBeLostControl: boolean;
  canBeRooted: boolean;
  canBeMadness: boolean;
  canBeTired: boolean;
  canBeBlinded: boolean;
  canBeGrabbed: boolean;
  canBeDisarmed: boolean;
  canBeResurrected: boolean;
  canBeCursed: boolean;
  canBeBurning: boolean;
  canBeParanoia: boolean;
  canBeSpellbound: boolean;

  bleeding: boolean;
  stunned: boolean;
  felled: boolean;
  sick: Record<string, any>;
  scared: boolean;
  lostControl: boolean;
  burned: boolean;
  rooted: boolean;
  madness: boolean;
  tired: boolean;
  blinded: boolean;
  grabbed: boolean;
  disarmed: boolean;
  cripple: boolean;
  resurrected: boolean;
  cursed: Record<string, any>;
  burning: boolean;
  paranoia: boolean;
  vertic: boolean;
  spellbound: boolean;
}

const alteredStateSchema: Schema<IAlteredState> = new mongoose.Schema({
  canBeBleeding: { type: Boolean, default: true },
  canBeStunned: { type: Boolean, default: true },
  canBeFelled: { type: Boolean, default: true },
  canBeSick: { type: Boolean, default: true },
  canBeScared: { type: Boolean, default: true },
  canBeLostControl: { type: Boolean, default: true },
  canBeRooted: { type: Boolean, default: true },
  canBeMadness: { type: Boolean, default: true },
  canBeTired: { type: Boolean, default: true },
  canBeBlinded: { type: Boolean, default: true },
  canBeGrabbed: { type: Boolean, default: true },
  canBeDisarmed: { type: Boolean, default: true },
  canBeResurrected: { type: Boolean, default: true },
  canBeCursed: { type: Boolean, default: true },
  canBeBurning: { type: Boolean, default: true },
  canBeParanoia: { type: Boolean, default: true },
  canBeSpellbound: { type: Boolean, default: true },

  bleeding: { type: Boolean, default: false },
  stunned: { type: Boolean, default: false },
  felled: { type: Boolean, default: false },
  sick: { type: Schema.Types.Mixed, default: {} },
  scared: { type: Boolean, default: false },
  lostControl: { type: Boolean, default: false },
  burned: { type: Boolean, default: false },
  rooted: { type: Boolean, default: false },
  madness: { type: Boolean, default: false },
  tired: { type: Boolean, default: false },
  blinded: { type: Boolean, default: false },
  grabbed: { type: Boolean, default: false },
  disarmed: { type: Boolean, default: false },
  cripple: { type: Boolean, default: false },
  resurrected: { type: Boolean, default: false },
  cursed: { type: Schema.Types.Mixed, default: {} },
  burning: { type: Boolean, default: false },
  paranoia: { type: Boolean, default: false },
  vertic: { type: Boolean, default: false },
  spellbound: { type: Boolean, default: false },
});

export { alteredStateSchema };
