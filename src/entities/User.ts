import mongoose, { Schema, Document, HydratedDocument, Query } from "mongoose";
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

// --- Middleware para save() ---
userSchema.pre("save", async function (this: HydratedDocument<IUser>, next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err as any);
  }
});

// --- Middleware para findOneAndUpdate / findByIdAndUpdate ---
userSchema.pre(
  ["findOneAndUpdate", "updateOne"],
  async function (this: Query<any, any>, next) {
    const update = this.getUpdate() as any;

    if (update?.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        update.password = await bcrypt.hash(update.password, salt);
        this.setUpdate(update);
      } catch (err) {
        return next(err as any);
      }
    }

    next();
  }
);

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<IUser>("User", userSchema);

export { User, userSchema };
