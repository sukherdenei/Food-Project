import { Request, Response } from "express";
import userModel from "../models/user.model";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await userModel.create(userData);
    res.status(200).json({ message: "User created..", newUser });
  } catch (error) {
    res.status(500).json({ message: "Error in create user", error });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await userModel.find();
    res.status(200).json({ message: "get all users", allUsers });
  } catch (error) {
    res.status(500).json({ message: "Error in get users", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    await userModel.deleteOne({ _id: _id });
    res.status(200).json({ message: "deleted user" });
  } catch (error) {
    res.status(500).json({ message: "Error in delete user", error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { _id, email, password, phoneNumber, address, role, isVerified } =
      req.body;
    const updatedUser = await userModel.updateOne(
      { _id: _id },
      { email, password, phoneNumber, address, role, isVerified }
    );
    res.status(200).json({ message: "Updated user..", updateUser });
  } catch (error) {
    res.status(500).json({ message: "Error in update user", error });
  }
};
