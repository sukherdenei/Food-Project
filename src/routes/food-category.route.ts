import express, { Router } from "express";
import {
  createFoodCategory,
  getFoodCategory,
  getFoodCategoryDelete,
  getFoodCategoryPut,
} from "../services/food-category.controllers";

const categoryRoute = express.Router();

categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getFoodCategory);
categoryRoute.delete("/:foodCategoryId", getFoodCategoryDelete);
categoryRoute.put("/:foodCategoryId", getFoodCategoryPut);

export default categoryRoute;
