import mongoose, { Schema } from "mongoose";

type UserSchemeType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  orderedFoods: string[];
  role: "USER" | "ADMIN";
  isVerified?: Boolean;
  timestamps?: true;
};

const userScheme: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    role: { type: ["USER", "ADMIN"], default: "USER" },
    edFoods: { type: [Schema.ObjectId], ref: "FoodsOrder" },
    // isVerified: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<UserSchemeType>("UserSchema", userScheme);
