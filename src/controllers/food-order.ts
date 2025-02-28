import { Request, Response } from "express";
import foodCategoryModel from "../models/food-category.model";

export const postFood = async (req: Request, res: Response) => {
  try {
    const postFoodOrder = req.body;
    const newCategory = await foodCategoryModel.create(postFoodOrder);
    res
      .status(200)
      .json({ message: "Succesfully created user category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "error in get food category", error });
  }
};
