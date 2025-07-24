import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  token: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  token: { type: String },
});

const User = mongoose.model<IUser>("User", userSchema);

export { User, userSchema, IUser };
