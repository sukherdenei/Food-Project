import mongoose, { Schema } from "mongoose";

type AuthSchemaType = {
  email: String;
  password: String;
  refreshToken?: String;
  resetPasswordToken?: String;
  resetPasswordExpires?: Date;
};

const AuthSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    refreshToken: { type: String },
    resetPasswordExpires: { type: String },
    resetPasswordToken: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<AuthSchemaType>(
  "Authentication-Type",
  AuthSchema
);
