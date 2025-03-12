import { Request, Response } from "express";
import foodCategoryModel from "../models/food-category.model";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModel.create(categoryData);
    res
      .status(201)
      .json({ message: "Successfully created category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in create FoodCategory", error });
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
    res.status(500).json({ message: "Error in getFoodCategory", error });
  }
};

export const getFoodCategoryPut = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;
  const updateData = req.body;
  try {
    const editCategory = await foodCategoryModel.updateOne(
      {
        _id: foodCategoryId,
      },
      updateData
    );
    res.status(200).json({ message: "Succesfully edit!", editCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in getFood Category Edit", error });
  }
};

export const getFoodCategoryDelete = async (req: Request, res: Response) => {
  const { foodCategoryId } = req.params;
  console.log(foodCategoryId);
  try {
    const deleteCategory = await foodCategoryModel.deleteOne({
      _id: foodCategoryId,
    });
    res.status(200).json({ message: "Succesfully deleted!", deleteCategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in get Food Category Delete", error });
  }
};
