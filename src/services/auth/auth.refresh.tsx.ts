import { Request, Response } from "express";
import userModel from "../../models/user.model";

export const authRefresh = async (req: Request, res: Response) => {
  try {
    const refresh = await userModel.find();
    res
      .status(200)
      .json({ message: "Successfully got Authentication refresh", refresh });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in Authentication refresh data", error });
  }
};
