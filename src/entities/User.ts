import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  username: string;
  password: string;
  token: string;
  rol: "admin" | "officer" | "roler" | "guest";
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
  rol: {
    type: String,
    enum: ["admin", "officer", "roler", "guest"],
    default: "guest",
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this as IUser;

  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (err) {
    next(err as any);
  }
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const result = await bcrypt.compare(candidatePassword, this.password);
  return result;
};

const User = mongoose.model<IUser>("User", userSchema);

export { User, userSchema };
