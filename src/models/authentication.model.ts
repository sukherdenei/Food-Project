import mongoose, { Schema } from "mongoose";

type AuthSchemaType = {
  email: String;
  password: String;
};

const AuthSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phonenumber: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model<AuthSchemaType>(
  "Authentication-Type",
  AuthSchema
);
