import { Request, Response } from "express";
import foodCategoryModel from "../models/food-category.model";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModel.create(categoryData);
    res
      .status(200)
      .json({ message: "Successfully created category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory" });
  }
};

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    // const getCategoryData = req.body;
    const newGetCategory = await foodCategoryModel.find();
    res
      .status(200)
      .json({ message: "Succesfully getFoodCategory", newGetCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in getFoodCategory" });
  }
};

export const getFoodCategoryDelete = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    await foodCategoryModel.deleteOne({ _id });
    res.status(200).json({ message: "Succesfully deleted!" });
  } catch (error) {
    res.status(500).json({ message: "Error in get Food Category Delete" });
  }
};

export const getFoodCategoryPut = async (req: Request, res: Response) => {
  try {
    const { _id, categoryName } = req.body;
    await foodCategoryModel.updateOne({ _id }, { categoryName });
    res.status(200).json({ message: "Succesfully edit!" });
  } catch (error) {
    res.status(500).json({ message: "Error in getFood Category Edit" });
  }
};
