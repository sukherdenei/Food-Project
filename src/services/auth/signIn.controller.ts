import { compareSync } from "bcryptjs";
import { Request, Response } from "express";
import userModel from "../../models/user.model";

export const singIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(401).json({ message: "enter a valid email address" });
      return;
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "not registered email" });
      return;
    }
    const isCorrect = compareSync(password, user.password);
    if (!isCorrect) {
      res.status(401).json({ message: "Wrong password..." });
      return;
    }

    res.status(200).json({ message: "Successfully sign in", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error in sign in", error });
  }
};
