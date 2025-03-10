import { Request, Response } from "express";
import authenticationModel from "../models/authentication.model";

export const getAuthentication = async (req: Request, res: Response) => {
  try {
    const getAuth = req.body;
    const newCategory = await authenticationModel.find(getAuth);
    res
      .status(200)
      .json({ message: "Successfully got authentication", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in get authenticatoin", error });
  }
};

export const createAuthSign = async (req: Request, res: Response) => {
  try {
    const createAuth = req.body;
    const newCreate = await authenticationModel.findOne(createAuth);
    res
      .status(200)
      .json({ message: "Successfully sign in authentication", newCreate });
  } catch (error) {
    res.status(500).json({ message: "Error in sign in authentication", error });
  }
};

export const createSignUp = async (req: Request, res: Response) => {
  try {
    const signUp = req.body;
    const newSignUp = await authenticationModel.create(signUp);
    res.status(201).json({ message: "Successfully sign up", newSignUp });
  } catch (error) {
    res.status(500).json({ message: "Error in sign up", error });
  }
};

export const deleteAuth = async (req: Request, res: Response) => {
  try {
    const { authId } = req.params;

    await authenticationModel.findByIdAndDelete(authId);
    res.status(200).json({
      message: "Successfully delete the authentication by id",
      authId,
    });
  } catch (error) {
    res.status(500).json({ message: "Error in delete authentication", error });
  }
};
