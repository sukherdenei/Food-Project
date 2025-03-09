import mongoose, { Schema } from "mongoose";

type UserSchemeType = {
  email: String;
  password: String;
  phoneNumber: String;
  address: String;
  role: String;
  isVerified: Boolean;
  timestamps: true;
};

const userScheme: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: { type: String, required: true },
    isVerified: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<UserSchemeType>("UserSchema", userScheme);
