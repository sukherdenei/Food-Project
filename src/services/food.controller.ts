import { Request, Response } from "express";
import foodModel from "../models/food.model";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    const newFood = await foodModel.create(foodData);
    res.status(200).json({ message: "Successfully create food" });
  } catch (error) {
    res.status(500).json({ message: "Error in the create food", error });
  }
};

export const getFoodById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { foodId } = req.params;
    const food = await foodModel.findById(foodId).populate("category");
    if (!food) res.status(404).json({ message: "Food not found" });
    res.status(201).json({ message: "Successfully got the food", food });
  } catch (error) {
    res.status(500).json({ message: "Error in get food by id", error });
  }
};

export const updateFood = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { foodId } = req.params;
    const updatedFood = await foodModel.findByIdAndUpdate(foodId, req.body, {
      new: true,
    });
    if (!updateFood) {
      res.status(404).json({ message: "Food not found" });
      return;
    }
    res.status(200).json({ message: "Successfully updated food", updatedFood });
  } catch (error) {
    res.status(500).json({ message: "Error in update food", error });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const { foodId } = req.params;
    await foodModel.findByIdAndDelete(foodId);
    res.status(200).json({ message: "Successfully updated the food" });
  } catch (error) {
    res.status(500).json({ message: "Error in delete food", error });
  }
};
