import { hashSync } from "bcryptjs";
import { Request, Response } from "express";
import userModel from "../../models/user.model";

export const singUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log(password);
    if (!email) {
      res.status(401).json({ message: "enter a valid email address" });
      return;
    }
    console.log("raw password", password);
    const hashedPassword = hashSync(password, 10);
    const createdUser = await userModel.create({
      email,
      password: hashedPassword,
    });

    console.log(hashedPassword, "hashPassword");

    res.status(200).json({
      message: "Successfully created sign up account",
      data: createdUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Error in create sign up", error });
  }
};
