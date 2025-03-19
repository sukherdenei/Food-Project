import { Request, Response } from "express";
import userModel from "../../models/user.model";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../util/send-email";
import { configDotenv } from "dotenv";

configDotenv();

const jwtSecret = process.env.JWT_SECRET;

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(401).json({ messsage: "Emailee oruulna uu" });
      return;
    }

    const user = await userModel.findOne({ email });
    console.log("user", user);

    if (!user) {
      res.status(401).json({ messsage: "Burtgeltei hereglegch alga" });
      return;
    }

    console.log("jwt-secret", jwtSecret);
    //http://localhost:3000/reset-password?id=kl12k32193

    const token = jwt.sign({ id: user._id }, jwtSecret!, { expiresIn: "1h" });

    await sendEmail(email, token);
    res.status(200).json({ message: "amjilttai" });
  } catch (error) {
    res.status(500).json({ message: "Aldaa garlaa", error });
  }
};
