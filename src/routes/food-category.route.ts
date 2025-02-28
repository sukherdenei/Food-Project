import express, { Router } from "express";
import {
  createFoodCategory,
  getFoodCategory,
  getFoodCategoryDelete,
  getFoodCategoryPut,
} from "../controllers/food-category.controllers";

const categoryRoute = express.Router();

categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getFoodCategory);
categoryRoute.delete("/:foodCategoryId", getFoodCategoryDelete);
categoryRoute.put("/:food-categoryId", getFoodCategoryPut);

export default categoryRoute;
