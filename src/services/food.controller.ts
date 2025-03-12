import { Request, Response } from "express";
import foodModel from "../models/food.model";
import { json } from "stream/consumers";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    const newFood = await foodModel.create(foodData);
    res.status(200).json({ message: "Successfully create food", newFood });
  } catch (error) {
    res.status(500).json({ message: "Error in the create food", error });
  }
};

export const getFoodById = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  try {
    const getFoodById = await foodModel.find({
      _id: foodId,
    });
    res
      .status(200)
      .json({ message: "Successfully got the foodId", getFoodById });
  } catch (error) {
    res.status(500).json({ message: "Error in got foodId", error });
  }
};

export const getFoods = async (req: Request, res: Response) => {
  try {
    const getFood = await foodModel.find().populate("category");
    res.status(200).json({ message: "Successfully got the food", getFood });
  } catch (error) {
    res.status(500).json({ message: "Error in got food", error });
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
    res.status(200).json({ message: "Successfully deleted the food" });
  } catch (error) {
    res.status(500).json({ message: "Error in delete food", error });
  }
};
